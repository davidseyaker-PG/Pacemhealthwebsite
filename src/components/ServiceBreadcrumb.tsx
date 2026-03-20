import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceBreadcrumbProps {
  serviceName: string;
}

export function ServiceBreadcrumb({ serviceName }: ServiceBreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-50 border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/">
              <span className="flex items-center gap-1.5 text-gray-600 hover:text-[#003d7a] transition-colors group cursor-pointer">
                <Home className="w-4 h-4" />
                <span className="group-hover:underline">Home</span>
              </span>
            </Link>
          </li>
          
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
          
          <li>
            <span className="text-gray-500">Services</span>
          </li>
          
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </li>
          
          <li>
            <span className="font-semibold text-[#003d7a]" aria-current="page">
              {serviceName}
            </span>
          </li>
        </ol>
      </div>
    </motion.nav>
  );
}