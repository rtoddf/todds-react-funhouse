const structure = [
  {
      title: "Mobile",
      options: [
        {
          heading: "Datasources",
          url: "/ams/mobile/datasources",
          description: "Indexes the content other config files feed from"
        },
        {
          heading: "Home Screen",
          url: "/ams/mobile/homescreen",
          description: "Home Screen Sections"
        },
        {
          heading: "Livestream",
          url: "/ams/mobile/livestream",
          description: "Configures live streaming feeds for:"
        },
        {
          heading: "Menu",
          url: "/ams/mobile/menu",
          description: "Configures the \"Hamburger Menu\" at top left section of app"
        }
      ]
  },
  {
      title: "OTT",
      options: [
        {
          heading: "Global Configuration",
          url: "/ams/ott/globalconfig",
          description: ""
        },
        {
          heading: "Datasources",
          url: "/ams/ott/datasources",
          description: "Indexes the content other config files feed from"
        },
        {
          heading: "Menu",
          url: "/ams/ott/menu",
          description: "Configures the Home Screen Nav Bar"
        }
      ]
  }
];

const mobileMenu = [
  {
    title: "Watch Now",
    subMenu: [
      {
        title: "24/7 Watch Now",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      },
      {
        title: "24/7 Watch Now II",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      }
    ]
  },
  {
    title: "News",
    subMenu: [
      {
        title: "24/7 Breaking News",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      }
    ]
  },
  {
    title: "Weather",
    subMenu: [
      {
        title: "24/7 Weather",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      }
    ]
  },
  {
    title: "Multimedia",
    subMenu: [
      {
        title: "24/7 Multimedia",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      }
    ]
  },
  {
    title: "Traffic",
    subMenu: [
      {
        title: "24/7 Traffic",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      }
    ]
  },
  {
    title: "Lottery",
    subMenu: [
      {
        title: "24/7 Lottery",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      }
    ]
  },
  {
    title: "Information",
    subMenu: [
      {
        title: "24/7 Information",
        contentType: "Brightcove Url",
        contentSource: "access_atlanta"
      }
    ]
  },
]

const contentTypes = [
  "Brightcove Url",
  "Cities",
  "Currnent Weather",
  "Debug",
  "Email",
  "Extended Forecast Json Feed",
  "Home",
  "Image View"
]

const contentSources = [
  "access_atlanta",
  "atlanta_blaze",
  "live_event",
  "live_event2",
  "live_feed"
]

export { structure };
export { mobileMenu };
export { contentTypes };
export { contentSources };