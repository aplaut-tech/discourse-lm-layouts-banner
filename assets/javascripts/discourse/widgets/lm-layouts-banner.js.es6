import {createWidget} from 'discourse/widgets/widget';
import {h} from 'virtual-dom';

export default createWidget('lm-layouts-banner', {
  tagName: 'div.lm-layouts-banner',

  html() {
    const image = h('img.lm-layouts-banner-image', {
      src: this.siteSettings.lm_layouts_banner_image
    });

    const anchor = h('a.lm-layouts-banner-anchor', {
      url: this.siteSettings.lm_layouts_banner_url,
      target: '_blank'
    }, [image]);

    return anchor;
  }
})
