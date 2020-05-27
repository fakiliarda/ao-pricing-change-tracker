package com.ao.backend.controller;

import com.ao.backend.model.Meeting;
import com.ao.backend.service.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("/")
public class IndexController {

    @Autowired
    MeetingService meetingService;

    @RequestMapping("/direct")
    public void direct()
    {
        List<Meeting> meetings = meetingService.getAllMeetings();
        meetings.forEach(System.out::println);
    }

    @PostMapping("/saveMeeting")
    public void saveMeeting(@RequestBody Meeting meeting)
    {
        meetingService.save(meeting);
    }

    @GetMapping("/listMeeting")
    public List<Meeting> getAllMeetings()
    {
       return meetingService.getAllMeetings();
    }



}
