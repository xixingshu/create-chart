import { useCallback, useMemo } from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import { useGlobalLoading, IsGlobalActionLoadingParams } from '@/hooks';

const GlobalLoadingActonButton = (
  props: Omit<ButtonProps, 'onClick'> & {
    onClick?: IsGlobalActionLoadingParams['globalLoadingAction'];
    Component?: any;
    triggerName?: string;
    [key: string]: any;
  } & Omit<IsGlobalActionLoadingParams, 'globalLoadingAction'>,
) => {
  const {
    onClick,
    Component,
    needLoading = true,
    force = false,
    triggerName = 'onClick',
    ...nextProps
  } = props;

  const { isGlobalActionLoading } = useGlobalLoading();

  const handleClick = useCallback(async () => {
    return isGlobalActionLoading({
      globalLoadingAction: async (callback) => {
        let called = false;
        let _callback = () => {
          if (called) return;
          called = true;
          callback();
        };
        try {
          await onClick?.(_callback);
        } catch (err) {
        } finally {
          _callback();
        }
      },
      needLoading,
      force,
    });
  }, [onClick, needLoading, force]);

  const Comp = useMemo(() => {
    return Component || Button;
  }, [Component]);

  return (
    <Comp
      {...nextProps}
      {...{
        [triggerName]: handleClick,
      }}
    />
  );
};

export default GlobalLoadingActonButton;
