import EpnsSDK from "@epnsproject/backend-sdk-staging";

export default async function handler(req, res) {
    const CHANNEL_PK =
        "0x6174d38eb8333e4e94e50f2172ee9b9219aff83d5ee86f72ae9fe91fc49d7b8b";

    const epnsSdk = new EpnsSDK(CHANNEL_PK);

    const tx = await epnsSdk.sendNotification(
        "0x31d12C7679eC154FdCD7DcE41d85cB04a6f13D11",
        "WaveShare Notification",
        `${req.query.cid}`,
        "WaveShare Notification",
        `${req.query.cid}`,
        3,
        `https://ipfs.io/ipfs/${req.query.cid}`,
        "",
        null
    );
    res.status(200).json({ status: "success" });
}
