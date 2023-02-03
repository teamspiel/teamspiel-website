export const dataQuery = `
{
  headerSectionCollection(limit: 1) {
    items {
      companyType
      title
      paragraph
      buttonLabel
    }
  }
  servicesSectionCollection(limit: 1) {
    items {
      title
      claim {
          json
      }
      paragraph
      servicesCollection(limit: 20) {
        items {
          title
          paragraph
          icon {
              url
          }
        }
      }
    }
  }
  aboutSectionCollection(limit: 1) {
    items {
      title
      claim {
          json
      }
      paragraph
      employeesCollection(limit: 20) {
        items {
          fullname
          image {
            url
          }
          roles
        }
      }
    }
  }
  contactSectionCollection(limit: 1) {
    items {
      title
      claim {
          json
      }
      paragraph
      formNameLabel
      formEmailLabel
      formPhoneLabel
      formTextboxLabel
      formSubmitLabel
      contactPhoneNumber
      contactEmailAddress
    }
  }
  careerSectionCollection(limit: 1) {
    items {
      title
      buttonLabel
      buttonUrl
    }
  }
  ctaSectionCollection(limit: 1) {
    items {
      title
      buttonLabel
    }
  }
}
`;
