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
        contentType: "Content Type",
        contentSource: "Content Source"
      },
      {
        title: "24/7 Watch Now II",
        contentType: "Content Type",
        contentSource: "Content Source"
      }
    ]
  },
  {
    title: "News",
    subMenu: [
      {
        title: "24/7 Breaking News",
        contentType: "Content Type",
        contentSource: "Content Source"
      }
    ]
  },
  {
    title: "Weather",
    subMenu: [
      {
        title: "24/7 Weather",
        contentType: "Content Type",
        contentSource: "Content Source"
      }
    ]
  },
  {
    title: "Multimedia",
    subMenu: [
      {
        title: "24/7 Multimedia",
        contentType: "Content Type",
        contentSource: "Content Source"
      }
    ]
  },
  {
    title: "Traffic",
    subMenu: [
      {
        title: "24/7 Traffic",
        contentType: "Content Type",
        contentSource: "Content Source"
      }
    ]
  },
  {
    title: "Lottery",
    subMenu: [
      {
        title: "24/7 Lottery",
        contentType: "Content Type",
        contentSource: "Content Source"
      }
    ]
  },
  {
    title: "Information",
    subMenu: [
      {
        title: "24/7 Information",
        contentType: "Content Type",
        contentSource: "Content Source"
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

export { structure };
export { mobileMenu };
export { contentTypes };