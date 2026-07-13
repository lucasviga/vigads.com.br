"use client";

import { useHomeDashboard } from "@/hooks/useHomeDashboard";
import { BentoGrid } from "@/components/home-dashboard/bento/BentoGrid";
import { ChatSidebar } from "@/components/home-dashboard/chat/ChatSidebar";
import { ChatToggleButton } from "@/components/home-dashboard/chat/ChatToggleButton";
import { HomeChat } from "@/components/home-dashboard/chat/HomeChat";
import { CardModal } from "@/components/home-dashboard/modal/CardModal";
import { EventsSection } from "@/components/home-dashboard/events/EventsSection";
import { SideProjectsSection } from "@/components/home-dashboard/side-projects/SideProjectsSection";

export function HomeDashboard() {
  const dashboard = useHomeDashboard();

  return (
    <div
      className="shell"
      data-home-shell
      data-chat-open={dashboard.isChatOpen ? "true" : "false"}
    >
      <div className="shellLayout">
        <div className="main">
          <HomeChat
            query={dashboard.query}
            heroHint={dashboard.heroHint}
            isDisabled={dashboard.isStreaming}
            onQueryChange={dashboard.setQuery}
            onSubmit={dashboard.submitChat}
          />
          <BentoGrid onOpenCard={dashboard.setOpenCard} />
          <SideProjectsSection />
          <EventsSection />
        </div>
        <ChatSidebar
          isOpen={dashboard.isChatOpen}
          isStreaming={dashboard.isStreaming}
          loadingPhrase={dashboard.loadingPhrase}
          messages={dashboard.messages}
          query={dashboard.query}
          onQueryChange={dashboard.setQuery}
          onSubmit={dashboard.submitChat}
          onClose={dashboard.closeChat}
        />
      </div>
      {dashboard.isChatOpen ? null : (
        <ChatToggleButton isOpen={false} onToggle={dashboard.openChat} />
      )}
      <CardModal cardId={dashboard.openCard} onClose={dashboard.closeCard} />
    </div>
  );
}
