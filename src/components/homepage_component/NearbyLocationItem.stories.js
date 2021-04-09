import React from "react";
import NearbyLocationItem from "./NearbyLocationItem";

export default {
    title: "Body/NearbyLocationItem",
    component: NearbyLocationItem,
  };
  
  const Template = (args) => <NearbyLocationItem {...args} />;
  
  export const DefaultNearbyLocationItem = Template.bind({});
  DefaultNearbyLocationItem.args = {
    description: '',
    image_url: '',
    address: '',
    price: 1000
  };