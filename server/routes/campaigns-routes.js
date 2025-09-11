import Campaign from "../models/campaignmodel.js";
import { Router } from "express";

const router = Router();

// Middleware to check if user is authenticated (you'll need to implement this)
const authMiddleware = (req, res, next) => {
  // For now, just pass through - implement proper auth later
  next();
};

// Middleware to check if user is admin (you'll need to implement this)
const adminMiddleware = (req, res, next) => {
  // For now, just pass through - implement proper admin check later
  next();
};

// GET /api/campaigns - Get all active, approved campaigns for public view
router.get("/", async (req, res) => {
  try {
    const campaigns = await Campaign.find({
      isActive: true,
      isApproved: true,
      isDeleted: false
    }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      campaigns,
      count: campaigns.length
    });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching campaigns",
      error: error.message
    });
  }
});

// GET /api/campaigns/:id - Get single campaign by ID
router.get("/:id", async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    
    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: "Campaign not found"
      });
    }

    res.status(200).json({
      success: true,
      campaign
    });
  } catch (error) {
    console.error("Error fetching campaign:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching campaign",
      error: error.message
    });
  }
});

// POST /api/campaigns/:id/donate - Make a donation to a campaign
router.post("/:id/donate", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid donation amount is required"
      });
    }

    const campaign = await Campaign.findById(req.params.id);
    
    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: "Campaign not found"
      });
    }

    if (!campaign.isActive || !campaign.isApproved) {
      return res.status(400).json({
        success: false,
        message: "Campaign is not available for donations"
      });
    }

    // Update campaign current amount
    campaign.EventCurrentAmount += amount;
    await campaign.save();

    // Here you would typically also create a donation record
    // and handle payment processing

    res.status(200).json({
      success: true,
      message: "Donation successful",
      campaign,
      donationAmount: amount
    });
  } catch (error) {
    console.error("Error processing donation:", error);
    res.status(500).json({
      success: false,
      message: "Error processing donation",
      error: error.message
    });
  }
});

export default router;
