import { useCallback, useMemo } from 'react';
import { useIdPathMap } from '@/hooks';
import { CommonActionType } from './type';

const ShowAction = (props: CommonActionType) => {
  const {
    value,
    path,
    setComponent,
    setComponentAll,
    components,
    select,
    onClick,
  } = props;
  const {
    id,
    config: {
      attr: { visible },
    },
  } = value;

  const isShow = useMemo(() => {
    // * 选中多个的情况下，统一显示隐藏
    return visible && select.length === 1;
  }, [visible, select]);

  const title = useMemo(() => {
    return isShow ? '隐藏' : '显示';
  }, [isShow]);

  const handleClick = useCallback(
    (e: any) => {
      e.stopPropagation();
      if (isShow) {
        setComponent({
          value: {
            config: {
              attr: {
                visible: false,
              },
            },
          },
          id,
          path,
          action: 'update',
        });
      } else {
        const idPathMap = useIdPathMap();

        const updateComponent = select.reduce<
          ComponentMethod.SetComponentMethodParamsData[]
        >((acc, cur) => {
          const target = idPathMap[cur];
          if (target) {
            const { path, id } = target;
            acc.push({
              path,
              id,
              action: 'update',
              value: {
                config: {
                  attr: {
                    visible: true,
                  },
                },
              },
            });
          }
          return acc;
        }, []);

        setComponent(updateComponent);
      }
      onClick();
    },
    [isShow, id, path, components, setComponentAll, select, onClick],
  );

  return (
    <div key="show" onClick={handleClick}>
      {title}
    </div>
  );
};

export default ShowAction;