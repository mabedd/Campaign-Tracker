"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const campaign_1 = __importDefault(require("./routes/campaign"));
const swagger_1 = require("./swagger");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express_1.default.json());
app.use("/api/auth", auth_1.default);
app.use("/api/campaigns", campaign_1.default);
(0, swagger_1.setupSwagger)(app);
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
app.get("/", (req, res) => res.send("API running"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
