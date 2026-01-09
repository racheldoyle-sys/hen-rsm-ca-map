var simplemaps_canadamap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "no",
    state_description: "",
    state_color: "#2B587A",
    state_hover_color: "#3E6F94",
    state_url: "",
    border_size: "2.5",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    location_description: "",
    location_color: "#3076bc",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: "38",
    location_type: "marker",
    location_image_source: "",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#fff",
    label_hover_color: "#fff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "yes",
    hide_eastern_labels: "yes",
    manual_zoom: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    zoom_out_incrementally: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    back_image: "no",
    initial_back: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "./map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: ""
  },
  state_specific: {
    AB: {
      name: "Alberta",
      zoomable: "no"
    },
    BC: {
      name: "British Columbia",
      zoomable: "no"
    },
    SK: {
      name: "Saskatchewan",
      zoomable: "no"
    },
    MB: {
      name: "Manitoba",
      zoomable: "no"
    },
    ON: {
      name: "Ontario",
      zoomable: "no"
    },
    QC: {
      name: "Quebec",
      zoomable: "no"
    },
    NB: {
      name: "New Brunswick",
      zoomable: "no"
    },
    PE: {
      name: "Prince Edward Island",
      zoomable: "no"
    },
    NS: {
      name: "Nova Scotia",
      zoomable: "no"
    },
    NL: {
      name: "Newfoundland",
      zoomable: "no"
    },
    NU: {
      name: "Nunavut",
      zoomable: "no"
    },
    NT: {
      name: "Northwest Territories",
      zoomable: "no"
    },
    YT: {
      name: "Yukon",
      zoomable: "no"
    }
  },
  locations: {},
  labels: {
    PE: {
      x: 960,
      y: 814,
      parent_id: "PE",
      width: 65,
      display: "all"
    },
    NS: {
      x: 960,
      y: 854,
      parent_id: "NS",
      width: 65
    },
    AB: {
      x: 232,
      y: 657,
      parent_id: "AB"
    },
    BC: {
      x: 117,
      y: 635,
      parent_id: "BC"
    },
    YT: {
      x: 75,
      y: 440,
      parent_id: "YT"
    },
    NT: {
      x: 225,
      y: 471,
      parent_id: "NT"
    },
    NU: {
      x: 429,
      y: 478,
      parent_id: "NU"
    },
    SK: {
      x: 332,
      y: 670,
      parent_id: "SK"
    },
    MB: {
      x: 430,
      y: 675,
      parent_id: "MB"
    },
    NL: {
      x: 840,
      y: 643,
      parent_id: "NL"
    },
    NB: {
      x: 837,
      y: 798,
      parent_id: "NB"
    },
    ON: {
      x: 552,
      y: 747,
      parent_id: "ON"
    },
    QC: {
      x: 718,
      y: 704,
      parent_id: "QC"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};