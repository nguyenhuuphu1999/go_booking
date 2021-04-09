import React from "react";
import Feedback from "./Feedback";

export default {
    title: "Body/Feedback",
    component: Feedback,
  };
  
  const Template = (args) => <Feedback {...args} />;
  
  export const DefaultFeedback = Template.bind({});
  DefaultFeedback.args = {
    place: 'ha noi',
    city: 'gaga',
    content: 'hd',
    by: ''
  };