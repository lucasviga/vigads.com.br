"use client";

import { useHomeDashboard } from "@/hooks/useHomeDashboard";
import { BentoGrid } from "@/components/home-dashboard/bento/BentoGrid";
import { HomeChat } from "@/components/home-dashboard/chat/HomeChat";
import { CardModal } from "@/components/home-dashboard/modal/CardModal";

export function HomeDashboard() {
  const dashboard = useHomeDashboard();

  return (
    <div className="shell" data-home-shell>
      <div className="main">
        <HomeChat
          query={dashboard.query}
          reply={dashboard.reply}
          onQueryChange={dashboard.setQuery}
          onSubmit={dashboard.submitChat}
        />
        <BentoGrid onOpenCard={dashboard.setOpenCard} />
      </div>
      <CardModal cardId={dashboard.openCard} onClose={dashboard.closeCard} />
    </div>
  );
}
