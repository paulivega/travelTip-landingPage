import EmailSignupForm from "./email-signup-form";
import { Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section id="email-signup" className="py-16 bg-gradient-to-br from-travel-turquoise to-travel-blue relative overflow-hidden" style={{display: 'none'}}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/10 bg-opacity-10" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
      
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <EmailSignupForm />
      </div>
    </section>
  );
}