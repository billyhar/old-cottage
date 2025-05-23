window.CMS_MANUAL_INIT = true;

CMS.init({
  config: {
    backend: {
      name: 'github',
      repo: 'billyhar/old-cottage',
      branch: 'main',
      base_url: 'https://api.netlify.com',
      auth_endpoint: 'auth',
      client_id: 'YOUR_GITHUB_CLIENT_ID'
    },
    media_folder: "public/images",
    public_folder: "/images",
    collections: [
      {
        name: "content",
        label: "Page Content",
        files: [
          {
            name: "home",
            label: "Home Page",
            file: "src/content/home.yml",
            fields: [
              {label: "Hero Title", name: "heroTitle", widget: "string"},
              {label: "Hero Subtitle", name: "heroSubtitle", widget: "string"},
              {
                label: "Welcome Section",
                name: "welcome",
                widget: "object",
                fields: [
                  {label: "Title", name: "title", widget: "string"},
                  {label: "Content", name: "content", widget: "markdown"}
                ]
              },
              {
                label: "Amenities",
                name: "amenities",
                widget: "list",
                fields: [
                  {label: "Title", name: "title", widget: "string"},
                  {label: "Description", name: "description", widget: "string"}
                ]
              },
              {
                label: "Testimonials",
                name: "testimonials",
                widget: "list",
                fields: [
                  {label: "Quote", name: "quote", widget: "text"}
                ]
              },
              {
                label: "Pricing",
                name: "pricing",
                widget: "object",
                fields: [
                  {label: "Two Night Price", name: "twoNightPrice", widget: "string"},
                  {label: "Week Price", name: "weekPrice", widget: "string"},
                  {label: "Description", name: "description", widget: "text"}
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}); 