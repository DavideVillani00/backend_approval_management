const express = require("express");
const router = express.Router();
const { REQUEST } = require("../../database/database.js");

router.get("/:userId", async (req, res) => {
  const { id } = req.params;
  try {
    const data = REQUEST.filter((el) => el.userId == id);
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ msg: "Database error:", error });
  }
});

router.get("/all", (req, res) => {
  console.log("pROVA");
  try {
    const pendingRequest = REQUEST.filter((el) => el.state === "Pending");
    const acceptedRequest = REQUEST.filter((el) => el.state === "Accepted");
    const rejectedRequest = REQUEST.filter((el) => el.state === "Rejected");
    const data = { pendingRequest, acceptedRequest, rejectedRequest };
    console.log(pendingRequest, acceptedRequest, rejectedRequest);
    res.status(200).json({ msg: "prova", data });
  } catch (error) {
    return res.status(500).json({ msg: "Database error:", error });
  }
});

router.post("/add", async (req, res) => {
  const { userId, title, description, firstName, lastName } = req.body;
  const user = lastName + " " + firstName;
  try {
    const newRequest = {
      requestId: Math.random * 1000,
      userId,
      title,
      description,
      state: "Pending",
      chronology: [
        {
          date: new Date(),
          state: "Submitted",
          description: "Sent request to supervisors",
          user,
        },
      ],
    };

    res.status(201).json({
      msg: "Request created",
    });
  } catch (error) {
    return res.status(500).json({ msg: "Database error:", error });
  }
});

router.put("/edit", (req, res) => {
  const { requestId, newState, firstName, lastName } = req.body;
  const user = lastName + " " + firstName;
  try {
    const newEvent = {
      date: new Date(),
      state: newState,
      description: newState + " request", // da modificare con un messaggio dal supervisor
      user,
    };
    REQUEST.forEach((el) => {
      if (el.requestId == requestId) {
        el.state = newState;
        el.chronology.push(newEvent);
      } else {
        return el;
      }
    });
  } catch (error) {
    return res.status(500).json({ msg: "Database error:", error });
  }
});

module.exports = router;
