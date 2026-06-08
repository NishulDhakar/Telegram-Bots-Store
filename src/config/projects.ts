export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const Bots: Project[] = [
  {
    id: "auto-forward-bot",
    title: "Auto Forward Bot",
    date: "06.2026",
    description: "A professional Telegram bot designed to automatically forward messages from channels or chats to specified destinations with support for customizable message filtering, keyword rules, and template formatting.",
    image: "/images/forward.jpg",
    tags: [],
    liveUrl: "https://t.me/Auto_Forwarder_Official_Bot?start=_tgr_pjYBnE0zNGZl",
    githubUrl: "https://github.com/NishulDhakar/Auto-forward-bot"
  },
  {
    id: "auto-approve-bot",
    title: "Auto Approve Bot",
    date: "06.2026",
    description: "A specialized Telegram bot that automatically processes and approves joining requests for channels or groups, enabling instant and friction-free user onboarding.",
    image: "/images/approve.jpg",
    tags: [],
    liveUrl: "https://t.me/Auto_request_accept_pro_bot?start=_tgr_C4GulsxkZGZl",
    githubUrl: "https://github.com/NishulDhakar/Auto-approve-bot"
  },
  {
    id: "auto-reaction-bot",
    title: "Auto Reaction Bot",
    date: "06.2026",
    description: "An interactive Telegram bot that automatically appends pre-configured emoji reactions to new messages in channels or groups to drive higher engagement and activity.",
    image: "/images/reaction.jpg",
    tags: [],
    liveUrl: "https://t.me/ReactionSavvyBot?start=_tgr_AzA7VAhiMWE1",
    githubUrl: "https://github.com/NishulDhakar/Auto-Reaction-Bot"
  }
];