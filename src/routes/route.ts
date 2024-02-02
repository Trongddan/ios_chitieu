import {AddIcon, ChartIcon, HomeIcon, ProfileIcon} from 'assets/index';
import {AddFinance, Chart, Home, Profile} from 'screens/private';

export enum list_bottom_tab {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  ADD = 'ADD_FINANCE',
  CHART = 'CHART',
}

export const bottom_tab = [
  {
    name: list_bottom_tab.HOME,
    component: Home,
    icon: HomeIcon,
    label: 'Home',
  },
  {
    name: list_bottom_tab.ADD,
    component: AddFinance,
    icon: AddIcon,
    label: 'Add',
  },
  {
    name: list_bottom_tab.CHART,
    component: Chart,
    icon: ChartIcon,
    label: 'Chart',
  },
  {
    name: list_bottom_tab.PROFILE,
    component: Profile,
    icon: ProfileIcon,
    label: 'Profile',
  },
];
