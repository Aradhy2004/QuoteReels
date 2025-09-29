import { Share2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonProps {
  quote: {
    text: string;
    author: string;
    book: string;
  };
}

export default function ShareButton({ quote }: ShareButtonProps) {
  const { toast } = useToast();

  const shareText = `"${quote.text}" - ${quote.author}, ${quote.book}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      toast({
        description: "Quote copied to clipboard!",
      });
    } catch (err) {
      console.log('Copy failed:', err);
      toast({
        description: "Failed to copy quote",
        variant: "destructive",
      });
    }
  };

  const shareOnTwitter = () => {
    // Mock functionality for demo
    console.log('Sharing on Twitter:', shareText);
    toast({
      description: "Opening Twitter... (Demo)",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" data-testid="button-share">
          <Share2 className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={copyToClipboard} data-testid="button-copy">
          <Copy className="mr-2 h-4 w-4" />
          Copy Quote
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnTwitter} data-testid="button-twitter">
          <Share2 className="mr-2 h-4 w-4" />
          Share on Twitter
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}