import AreaSEO from '@/components/area/AreaSEO';
import AreaSchema from '@/components/area/AreaSchema';
import AreaPage from '@/components/area/AreaPage';
import { areaBySlug } from '@/lib/area';

// 각도11 · 인원별 공략형
const area = areaBySlug('eunpyeong-night');

export default function Page() {
  return (
    <>
      <AreaSEO area={area} />
      <AreaSchema area={area} />
      <AreaPage area={area} />
    </>
  );
}
