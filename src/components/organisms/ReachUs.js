import React from 'react';
import {_} from 'lodash';
import social_block from "../../../data/social-icons";

import IconParagraph from './../atoms/IconParagraph';
import SectionTitle from './../atoms/SectionTitle';

import icon1 from './../../files/icons/contact/email.svg';
import icon2 from './../../files/icons/contact/mail.svg'
import icon3 from './../../files/icons/contact/phone.svg'

const ReachUs = () => {

  const{ social_icons } = social_block;

 let iconsList = social_icons.map((icon, index) => {
   let{ image, title, text, text2, text3} = icon;

   return (
     <IconParagraph
       key = { index }
       icon = { image }
       icon_heading = { title }
       icon_text = { text }
       icon_text2 = { text2 }
       icon_text3 = { text3 }
     />
   )
 });

    return <div className = "reach-us--wrapper">{ iconsList }</div>


}

export default ReachUs;