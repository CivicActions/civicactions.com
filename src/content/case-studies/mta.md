---
path: "/case-study/mta"
type:  "case-study"
title: "Connecting public transit to real time data"
client_name: "New York Metropolitan Transportation Authority"
preview_image: mta-preview.jpg
promoted_to_front_page: no
partner: ''
project: "MTA Digital Countdown Clocks"
website: 
background_section_title: "New system needed to support modern signage"
background_section: "The MTA manages the world’s largest public transit system, helping over 11 million passengers get around New York City every day. Subway riders rely on the MTA’s website for travel information to help them know when their train will arrive. The agency needed a way to display information from their website on digital signs in subway stations and platforms. " 

background_section_second: "The data was complex and constantly changing, representing a massive network of trains, tracks, and stations — which needed to display reliably and in real time to keep riders informed. [Acquia](https://www.acquia.com/) and CivicActions worked with MTA to extend the agency’s existing Drupal CMS to a network of devices using Amazon’s Internet of Things (IoT)."
tags: ["UX", "Drupal", "Innovation Lab"]
specs: [
"Decoupled Drupal 8",
"React.js",
"Responsive design", 
"Amazon IoT (Internet of things) ", 
]
images:
  - {
  url: 'mta-1.jpg', 
  caption: 'Realtime data lets subway riders know when their train will arrive.', 
  alt: 'MTA digital countdown clock'
  }
  - {
  url: 'mta-2.jpg', 
  caption: 'Content model features allow the MTA to control data streams across the subway system', 
  alt: 'Content model'
  }
  - {
  url: 'mta-3.jpg', 
  caption: 'We set up a system that allows hundreds of digital signs to receive data simultaneously', 
  alt: 'Amanzon IoT chart'
  }
related_titles:
- Improving transparency in state government
- Modernizing a legacy federal system
- Helping Californians make healthy choices for life




---

### Approach

##### Helpful, timely info for transit riders
We helped MTA set the modern standard for using digital signage to communicate train arrival times, weather info, and service updates — making it easier for riders to plan their routes and get there on time. 

##### Open source = cost effective
Choosing open source technology over expensive proprietary software helps the MTA lower costs and avoid vendor lock-in. Open source also offers a more flexible web-publishing approach than complex legacy solutions.

##### Streamlined, accessible content management
The MTA needed a single administrative site that could manage a lot of data from a variety of external feeds. We developed a Drupal 8 content model to support the MTA’s administrative dashboard so even non-technical users can make changes themselves.

##### Flexible solution for many devices
The MTA needed to display data reliably regardless of the device or front-end design. We created a custom decoupled (headless) Drupal theme built in React.js to adapt to different screen sizes and mobile platforms. 

##### Connecting the Internet of Things
We built the system to connect to 3,000+ unique digital signs with AWS Internet of Things. Location-specific data for each platform is delivered instantaneously to display information that is relevant to riders. 

##### Built-in resilience for continuous service
A few seconds can make a big difference when navigating the world’s largest subway. We made sure the system could compensate for internet lapses to keep data flowing in real time. 

##### Making room to grow
We simplified the front-end architecture to push data from a central location to a huge number of devices. The MTA can scale the new system to accommodate signs for the entire subway system as it changes and grows. 

<blockquote>
CivicActions engineers were able to carry through complex technical requirements so that an entire city's worth of data could be captured, parsed, and displayed in a matter of a few seconds.
<cite>Mike Madison, Senior Technical Architect, Acquia </cite>
</blockquote>

### Impact
* Subway riders have a better travel experience with up-to-date info
* MTA administrators easily manage data on a familiar platform
* Real time data helps modernize public transportation 
* Flexible system accommodates future growth


### Explore
##### Learn more about the subway
[History and fun facts from the MTA](http://web.mta.info/countdwn_clocks.htm)

##### Technical deep dive
[Powering Subway Signage with Drupal 8 and AWS IoT](https://dev.acquia.com/blog/using-drupal-8-and-aws-iot-to-power-digital-signage-for-new-yorks-subway-system/01/10/2018/20051)

##### In-depth perspective from our partner
[Acquia: Metropolitan Transportation Authority Case Study](https://www.acquia.com/resources/case-study/mta)

##### Find out when your next train gets in
[MTA Subway Times](http://subwaytime.mta.info/)

<figure>
  <div> 
    <header>5.7 million</header>
    <p>Riders using real time<br>info every day<p>
  </div>
  <div> 
      <header>1800</header>
      <p>New clocks added<br>in 400 subway stations<p>
  </div>
</figure>
