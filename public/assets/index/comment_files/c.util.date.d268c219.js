/*
* Ctrip Lizard JavaScript Framework
* Copyright(C) 2008 - 2018, All rights reserved,ctrip.com.
* Date:2018-03-21 10:55:16
* tag:w-2.2-201803211055
*/
define(["cCoreInherit","cUtilCore"],function(i,t){var e=t.CDate;return i.extend(e,{getHM:function(i){var t=this._getDate(i),e=t.getHours(),n=t.getMinutes();return(10>e?"0"+e:""+e)+":"+(10>n?"0"+n:""+n)},getIntervalDay:function(i,t){var e=this._getDate(i),n=this._getDate(t);return e.setHours(0,0,0,0),n.setHours(0,0,0,0),parseInt((n-e)/864e5)},m2H:function(i){var t=Math.floor(i/60),e=i%60;return(t>0?t+"小时":"")+(e>0?e+"分钟":"")},_getDate:function(i){var t=e.parse(i,!0),n=new Date;return n.setTime(t),n},weekday:function(i){var t=["周日","周一","周二","周三","周四","周五","周六"],e=new Date(i);return t[e.getDay()]},diffMonth:function(i,t){return i=new e(i),i.diffMonth(t)}}),e});