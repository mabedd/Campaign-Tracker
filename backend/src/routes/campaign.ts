import { Router } from "express";
import {
  createCampaign,
  getCampaigns,
  updateCampaign,
  deleteCampaign,
} from "../controllers/campaignController";

const router = Router();

/**
 * @swagger
 * /api/campaigns:
 *   post:
 *     summary: Create a new campaign
 *     tags: [Campaigns]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Campaign'
 *     responses:
 *       201:
 *         description: The campaign was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/", createCampaign);

/**
 * @swagger
 * /api/campaigns:
 *   get:
 *     summary: Get all campaigns
 *     tags: [Campaigns]
 *     responses:
 *       200:
 *         description: The list of the campaigns
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Campaign'
 *       500:
 *         description: Some server error
 */
router.get("/", getCampaigns);

/**
 * @swagger
 * /api/campaigns/{id}:
 *   put:
 *     summary: Update a campaign
 *     tags: [Campaigns]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The campaign id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Campaign'
 *     responses:
 *       200:
 *         description: The campaign was successfully updated
 *       404:
 *         description: The campaign was not found
 *       500:
 *         description: Some server error
 */
router.put("/:id", updateCampaign);

/**
 * @swagger
 * /api/campaigns/{id}:
 *   delete:
 *     summary: Delete a campaign
 *     tags: [Campaigns]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The campaign id
 *     responses:
 *       200:
 *         description: The campaign was successfully deleted
 *       404:
 *         description: The campaign was not found
 *       500:
 *         description: Some server error
 */
router.delete("/:id", deleteCampaign);

export default router;
