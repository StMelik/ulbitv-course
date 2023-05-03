import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react/';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: '100%',
  height: 200
};

export const Circle = Template.bind({});
Circle.args = {
  borderRadius: '50%',
  width: 100,
  height: 100
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  width: '100%',
  height: 200
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  borderRadius: '50%',
  width: 100,
  height: 100
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalOrange = Template.bind({});
NormalOrange.args = {
  width: '100%',
  height: 200
};
NormalOrange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const CircleOrange = Template.bind({});
CircleOrange.args = {
  borderRadius: '50%',
  width: 100,
  height: 100
};
CircleOrange.decorators = [ThemeDecorator(Theme.ORANGE)];
