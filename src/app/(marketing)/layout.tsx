import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AiChat } from "@/components/chat/ai-chat";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <AiChat />
    </>
  );
}
