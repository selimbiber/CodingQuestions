package main

import "time"

func Sleep(millis int) {
  time.Sleep(time.Duration(millis) * time.Millisecond)
}