
import { _Conditional } from "polythene-core";
import { cast, h, a, useReducer, useRef, getRef, useState, useEffect } from "cyano-mithril";
import { _Menu } from "polythene-core-menu";
import classes from "polythene-css-classes/menu";
import { Shadow } from "polythene-mithril-shadow";

const MenuInstance = cast(_Menu, { h, a, useReducer, useState, useEffect, useRef, getRef, Shadow });
const MenuToggle = cast(_Conditional, { h, useState, useEffect });
MenuToggle["displayName"] = "MenuToggle";

export const Menu = {
  view: vnode =>
    h(MenuToggle, {
      ...vnode.attrs,
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    })
};

Menu["displayName"] = "Menu";
