import AreaSEO from '@/components/area/AreaSEO';
import AreaSchema from '@/components/area/AreaSchema';
import AreaPage from '@/components/area/AreaPage';
import { areaBySlug } from '@/lib/area';

// 각도6 · 오해 깨기형
const area = areaBySlug('busan-night');

export default function Page() {
  return (
    <>
      <AreaSEO area={area} />
      <AreaSchema area={area} />
      <AreaPage area={area} />
    </>
  );
}
