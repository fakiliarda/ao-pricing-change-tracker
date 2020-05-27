package com.ao.backend.service;

import com.ao.backend.model.Meeting;
import com.ao.backend.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingService {

    @Autowired
    MeetingRepository meetingRepository;

    public List<Meeting> getAllMeetings()
    {
        return meetingRepository.findAll();
    }

    public void save(Meeting meeting)
    {
        meetingRepository.save(meeting);
    }
}
