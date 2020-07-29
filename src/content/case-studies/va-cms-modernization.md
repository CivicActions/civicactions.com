---
weight: 1
path: "/case-study/va-cms-modernization"
type:  "case-study"
title: "Helping Veterans access care and benefits online"
client_name: "U.S. Department of Veterans Affairs"
preview_image: va-cms-preview.jpg
promoted_to_front_page: yes
partner: ''
project: "VA.gov CMS modernization"
website: "https://www.va.gov/pittsburgh-health-care/"
background_section_title: "Veterans need a better online experience"
background_section: "The U.S. Department of Veterans Affairs (VA) is working to improve the confusing experience many Veterans have when navigating multiple VA sites built on a mix of legacy technologies. Having launched a reinvigorated VA.gov in 2018 as a step toward a unified Veteran-first digital platform, the agency still needed to build out a common content management system (CMS), establish consistent descriptions for services, and organize the information in an accessible way for Veterans in need of health care."
background_section_second: "We joined the large-scale pilot effort which focused on using one of the regional VA Medical Centers as a model for all future VA.gov content. We integrated the new CMS with the existing site architecture and helped create standards for content and design that make it easier for VA staff to do their jobs -- while directly improving quality of life for millions of Veterans seeking health care and benefits."
tags: []
specs: [
"Decoupled Drupal 8",
"GraphQL",
"React",
"Metalsmith",
"U.S. Web Design System",
"Jenkins",
"Lando",
"AWS"
]
related_titles:
- Sharing data to support veterans
- Bringing free and open source software to government
- Promoting public health with open data
---

<p style="text-align:center;font-size:1.5rem">
<iframe width="560" height="315" src="https://www.youtube.com/embed/H8hndge4wLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Veterans can easily find the information they need on VA's improved website
</p>

### Approach

##### Partnership across teams
Working alongside our partners [AgileSix](https://agile6.com/) and [Nava](https://www.navapbc.com/) in collaboration with the [U.S. Digital Service at VA](https://department-of-veterans-affairs.github.io/dsva/) and other organizations, our team was one of many moving parts in a complex project. We provided technical training and modeled transparent communication practices that helped the various teams work effectively together.

##### Adapting to shifting needs
The technical strategy shifted to a “decoupled” approach partway through the project, requiring us to integrate the new CMS backend with the VA’s existing frontend system so that Veterans and caregivers could access content across multiple platforms. Agile practices helped us navigate this and other evolving priorities in a large ecosystem undergoing significant changes.

##### Integration without disruption
We transitioned to the modernized CMS without “pausing” the old site so the VA could re-use their existing frontend technology instead of starting from scratch. This meant we had to juggle content being served from two sources (GitHub and Drupal) while training VA staff to use the new backend tools. We also set up a DevOps pipeline for automated testing to ensure healthy functioning systems.

##### Keeping Veterans' information safe
Since the VA site handles personally identifiable information, we used an “API-first” approach that encapsulates data access behind an API that requires authentication. If there were a breach in the web application, Veterans’ personal data would not be accessible to an intruder.

##### Plain and consistent language
Previously, Veterans were confused by inconsistent service descriptions across multiple VA websites. We helped analyze, rewrite, and restructure loads of legacy content into Veteran-friendly language, which would become a “single source of truth” used to update the websites of hundreds of VA medical centers nationwide.

##### Usability testing with real people
To make sure health services and benefits are easy to find and understand, we tested navigation and content with real people, including unique groups like women, minority, and LGBTQ Veterans. We also interviewed VA staff responsible for maintaining the website, to understand their pain points and develop authoring and approval processes that make their jobs easier.

##### Empowering a Veteran-first approach
The VA has been working to [pave the way](https://www.usds.gov/report-to-congress/2016/vets-dot-gov/) for a Veteran-focused digital experience, and this project was a landmark moment in propagating that approach throughout the organization. Human centered design and plain language are no longer the sole purview of digital service experts -- we developed systems that allow VA staff at facilities across the country to participate in the modernization of service delivery.

<blockquote>
"VA is finally pivoting from focusing on its organizational structure to helping me as a Veteran."
<cite>Veteran using the new VA.gov</cite>
</blockquote>

### Impact
* Veterans and caregivers can manage appointments and prescriptions online
* Veterans can understand service offerings and plan a health care visit
* Unique groups such as women, LGBTQ, and minority Veterans can better navigate VA’s programs to find services specific to their needs
* Veterans can find needed information in 1 - 2 clicks using any device
* Veterans and caregivers can connect online with coordinators to help them navigate their health care journey
* VA staff have a model for publishing consistent content in plain language
* Product designers handling the long-term digital modernization at VA understand how to involve Drupal (their chosen CMS) in their approach


### Explore

##### See the work  
[VA Pittsburgh health care](https://www.va.gov/pittsburgh-health-care/) (the model for all future VA.gov content)

##### Explore the impact  
[VA’s announcement and feature list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/comms/New-VAMC-website-flyer-2020-01-WEB.pdf)
[NextGov: More Vets are taking advantage of digital services](https://www.nextgov.com/it-modernization/2019/11/more-vets-are-taking-advantage-digital-services-through-new-vagov/161190/)
[VA Secretary Robert Wilkie introduces the new VA.gov](https://www.blogs.va.gov/VAntage/53898/secretary-wilkie-announces-redesigned-va-gov-built-input-veterans-better-meet-needs/)  
[VA.gov performance dashboard](https://www.va.gov/performance-dashboard/)

##### View the source code
VA.gov [front-end](https://github.com/department-of-veterans-affairs/vets-website) and [back-end](https://github.com/department-of-veterans-affairs/va.gov-cms) repositories in GitHub

##### Learn about VA’s modern procurement strategy
[Comparative analysis case study](https://techfarhub.cio.gov/learning-center/case-studies/VA-gov-modernization-comparative-analysis)

##### See how we improved the VA staff experience
[Video: User research findings from CivicActions UX strategists](https://drive.google.com/file/d/1oV_FuBArq4gYlSJz0ZXf4WWJf3Z6iStu/view?usp=sharing)

<figure>
  <div>
    <header>2,019</header>
    <p>health services audited <br> and consolidated<p>
  </div>
  <div>
      <header>38</header>
      <p>research sessions with <br> VA content authors<p>
  </div>
</figure>
