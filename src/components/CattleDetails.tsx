import {
  ArrowLeftIcon,
  MapPinIcon,
  ScaleIcon,
  CalendarIcon,
  TagIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const [orderFormData, setOrderFormData] = useState<{
  name: string;
  whatsapp: string;
  address: string;
  city: string;
  district: string;
  notes?: string;
} | null>(null);

// Remove unused constants 