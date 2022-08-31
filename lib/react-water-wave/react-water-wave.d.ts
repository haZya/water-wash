declare module 'react-water-wave' {
  export interface RipplesOptions {
    imageUrl: string;
    dropRadius?: number;
    perturbance?: number;
    resolution?: number;
    interactive?: boolean;
    crossOrigin?: string;
  }

  export type SetProperties =
    | 'dropRadius'
    | 'perturbance'
    | 'interactive'
    | 'imageUrl'
    | 'crossOrigin';

  export type Drop = ({
    x,
    y,
    radius,
    strength,
  }: {
    x: number;
    y: number;
    radius: number;
    strength: number;
  }) => void;

  export type Set = ({ property, value }: { property: SetProperties; value: any }) => void;

  export type ChildrenOptions = {
    destroy: () => void;
    pause: () => void;
    play: () => void;
    hide: () => void;
    show: () => void;
    drop: Drop;
    set: Set;
    updateSize: () => void;
  };

  export interface WaterEffectProps extends RipplesOptions, React.ComponentPropsWithoutRef<'div'> {
    children: (props: ChildrenOptions) => ReactNode;
  }

  export const useRipples = (
    props: RipplesOptions & { rippleRef: RefObject<HTMLDivElement> }
  ): ChildrenOptions => {};

  export type RipplesArgument =
    | 'destroy'
    | 'drop'
    | 'pause'
    | 'play'
    | 'hide'
    | 'show'
    | 'set'
    | 'updateSize'
    | RipplesOptions;

  export default function WaterEffect({}: WaterEffectProps): JSX.Element;
}
