
import { SummaryCardData, JourneyStation, ChartDataPoint, EmotionalTag } from './types';

export const TOP_CARDS: SummaryCardData[] = [
  {
    id: 'c1',
    category: 'strength',
    title: 'חוזקות כישורים',
    icon: 'Zap',
    items: [
      'סקרנות אינטלקטואלית ורגשית',
      'חשיבה אסטרטגית ואנליטית',
      'אופרטיביות להפוך רעיונות לתוכנית פעולה',
      'משקיענות וחריצות',
      'רגישות ואכפתיות לאנשים'
    ]
  },
  {
    id: 'c2',
    category: 'improvement',
    title: 'מה כדאי לי לשפר',
    icon: 'Wrench',
    items: [
      'גמישות מחשבתית ורגשית',
      'להגיד בזמן (לא לצבור)',
      'לשחרר אחריות־יתר בבית',
      'לרכך ישירות כשצריך'
    ]
  },
  {
    id: 'c3',
    category: 'value',
    title: 'ערך שהבאתי',
    icon: 'Heart',
    items: [
      'אהבה וקבלה ללא תנאי',
      'אנרגיות חיוביות',
       'הנעה לעשייה',
      'פרספקטיבה וניתוח',
    ]
  }
];

export const JOURNEY_STATIONS: JourneyStation[] = [
  {
    id: 'j1',
    topic: 'גמישות מחשבתית',
    feedback: 'פחות נוקשות ו"שחור-לבן"',
    action: 'בכל דילמה, לעצור ולחפש אופציה שלישית שלא חשבתי עליה',
    metric: 'האם הצלחתי לזוז מהעמדה הראשונית שלי?'
  },
  {
    id: 'j2',
    topic: 'לדבר בזמן',
    feedback: 'לא לצבור כעסים ותסכול בבטן',
    action: 'להגיד את הדבר כשהוא עוד "קטן" ומנוהל',
    metric: 'האם סיימתי את השבוע בלי "התפוצצות"?'
  },
  {
    id: 'j3',
    topic: 'לשחרר אחריות',
    feedback: 'הנטייה "להציל את כולם" ולקחת הכל עליי',
    action: 'לתת לאחרים להתמודד עם משימות גם אם זה פחות מושלם',
    metric: 'האם הצלחתי לשבת ולנוח בזמן שאחרים עבדו?'
  }
];

export const CLUSTER_DATA: ChartDataPoint[] = [
  { subject: 'ניתוח ואסטרטגיה', A: 95, fullMark: 100, category: 'Mind' },
  { subject: 'סקרנות ולמידה', A: 90, fullMark: 100, category: 'Mind' },
  { subject: 'רגישות ואמפתיה', A: 95, fullMark: 100, category: 'Heart' },
  { subject: 'אנרגיות חיוביות', A: 85, fullMark: 100, category: 'Heart' },
  { subject: 'אופרטיביות', A: 90, fullMark: 100, category: 'Legs' },
  { subject: 'חריצות והתמדה', A: 100, fullMark: 100, category: 'Legs' },
];

export const EMOTIONAL_TAGS: EmotionalTag[] = [
  { text: 'בית רגשי', weight: 3 },
  { text: 'אהבה ללא תנאי', weight: 3 },
  { text: 'תמיד בצד שלי', weight: 2 },
  { text: 'ממלאת באנרגיה', weight: 2 },
  { text: 'רואה לעומק', weight: 2 },
  { text: 'משענת בטוחה', weight: 3 },
  { text: 'נותנת כוח', weight: 1 },
  { text: 'גב חזק', weight: 2 },
  { text: 'אופטימיות', weight: 1 },
  { text: 'מעוררת השראה', weight: 1 },
];
