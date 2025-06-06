import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export default function Navbar() {
return (
  <Breadcrumb>
    <BreadcrumbList className='rounded-lg border border-border bg-background px-3 py-2 shadow-sm shadow-black/5'>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>
          <Home size={16} strokeWidth={2} aria-hidden='true' />
          <span className='sr-only'>Home</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator> /   </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href='#about'>About</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator> / </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href='#work-experience'>Work Experience</BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
); }