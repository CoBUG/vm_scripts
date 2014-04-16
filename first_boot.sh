#!/bin/sh
vmadm list | grep $1 | awk '{print "cp /zones/isos/install54_i386.iso /zones/"$1"; vmadm boot " $1 "order=cd,once=d cdrom=/zones/"$1"/install54_i386.iso,ide"}'
