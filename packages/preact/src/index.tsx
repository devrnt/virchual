import { h, Component, VNode } from 'preact';
import { VirchualSlide, VirchualSlideProps } from './slide';

export interface Props {
  id: string;
  children?: VNode<VirchualSlideProps>[];
}

// http://jsfiddle.net/ndpjexqb/26/

export class Virchual extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const children = props.children || [];
    const slides: string[] = [];

    children.map(child => {
      const html = child.props.html;

      if (!html) {
        return;
      }

      slides.push(html);
    });
    console.log('slides', slides);
    this.state = {
      slides,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render({ id, children }: Props) {
    return (
      <div id={id} class="virchual image-swiper">
        <div class="virchual__frame" style="height: 100%">
          {children?.map((child, index) => {
            if (index > 0) {
              return null;
            }

            return child;
          })}
        </div>

        <button type="button" value="-1" tabIndex={-1} aria-controls="" class="virchual__control virchual__control--prev">
          <svg
            viewBox="0 0 16 16"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style="height: 20px; width: 20px; display: block; fill: currentcolor"
          >
            <path d="m10.8 16c-.4 0-.7-.1-.9-.4l-6.8-6.7c-.5-.5-.5-1.3 0-1.8l6.8-6.7c.5-.5 1.2-.5 1.7 0s .5 1.2 0 1.7l-5.8 5.9 5.8 5.9c.5.5.5 1.2 0 1.7-.2.3-.5.4-.8.4" />
          </svg>
        </button>

        <button type="button" value="1" tabIndex={-1} aria-controls="" class="virchual__control virchual__control--next">
          <svg
            viewBox="0 0 16 16"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style="height: 20px; width: 20px; display: block; fill: currentcolor"
          >
            <path d="m5.3 16c .3 0 .6-.1.8-.4l6.8-6.7c.5-.5.5-1.3 0-1.8l-6.8-6.7c-.5-.5-1.2-.5-1.7 0s-.5 1.2 0 1.7l5.8 5.9-5.8 5.9c-.5.5-.5 1.2 0 1.7.2.3.5.4.9.4" />
          </svg>
        </button>
      </div>
    );
  }
}

export { VirchualSlide };
