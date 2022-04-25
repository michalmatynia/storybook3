import { ComponentStory, ComponentMeta } from '@storybook/react'

import { restaurants } from '../../stub/restaurants'

import { RestaurantCard } from './progress/RestaurantCard.basic'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  argTypes: {
    rating: {
      // we use the same mechanism from review component
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
} as ComponentMeta<typeof RestaurantCard>

const Template: ComponentStory<typeof RestaurantCard> = (args) => <RestaurantCard {...args} />

export const Default = Template.bind({})
Default.args = {
  ...restaurants[0], // reuse properties from mock data
}

export const New = Template.bind({})
New.args = {
  // reuse args from Default story
  ...Default.args,
  isNew: true,
}

export const Closed = Template.bind({})
Closed.args = {
  ...Default.args,
  isClosed: true,
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
  isLoading: true,
}
