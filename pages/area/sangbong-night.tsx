import AreaSEO from '@/components/area/AreaSEO';
import AreaSchema from '@/components/area/AreaSchema';
import AreaPage from '@/components/area/AreaPage';
import { areaBySlug } from '@/lib/area';

// 각도4 · 처음 가는 사람 시점
const area = areaBySlug('sangbong-night');

export default function Page() {
  return (
    <>
      <AreaSEO area={area} />
      <AreaSchema area={area} />
      <AreaPage area={area} />
    </>
  );
}
