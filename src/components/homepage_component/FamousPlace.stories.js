import React from "react";
import FamousPlace from "./FamousPlace";

export default {
    title: "Body/FamousPlace",
    component: FamousPlace,
  };
  
  const Template = (args) => <FamousPlace {...args} />;
  
  export const DefaultFamousPlace = Template.bind({});
  DefaultFamousPlace.args = {
    image_url: 'https://s3-alpha-sig.figma.com/img/81d1/dde5/b9af47bab333b1cc6774cfae3fd7838c?Expires=1610928000&Signature=C2lXlO3eJAiLEyT1xUBvCrHArNRsv9b0tJOJcak2zT26apj9caGghggJs8DYQtFRpNMGjFYqp4gmCMh4N1I9ejTo30gGRoJ-2PWhkmSUfeW9j2LAbJ7VmcSDABBTKbC~Wzc9Ie7HyAgGEGrsRgPWO67tA9xbNAUzX7NzFFyYX8WQRv9pMZtAu25FQLPWl7q6VmyZsdA8aBkTlacrdCJqvgXTF1PZxJ6p2~kUu4GLyae7mopyQTsk2JZQpwbJF0bFvcXMHNhynO2lLEkXp6wbMI4QhuLtoG97KbHa-YyJtYVbWQlUVPMrc4sV88IvzQvJUStAGAHd3f4Q5affeIfEVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 
    address: 'ha noi'
  };