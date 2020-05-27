package com.ao.backend.repository;

import com.ao.backend.model.Meeting;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MeetingRepository extends MongoRepository<Meeting, String> {
    
}
