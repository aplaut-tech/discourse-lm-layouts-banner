# name: lm-layouts-banner
# about: Adds banner to sidebar (requires layouts plugin)
# version: 0.0.1
# authors: Shoppilot team

enabled_site_setting :lm_layouts_banner_image
enabled_site_setting :lm_layouts_banner_url

register_asset 'stylesheets/lm-layouts-banner.scss'

after_initialize do
  DiscourseLayouts::WidgetHelper.add_widget('lm-layouts-banner')
end
