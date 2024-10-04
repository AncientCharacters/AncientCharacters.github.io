import { Link } from 'react-router-dom'
import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
import React, { useState } from 'react'

// 单个字符卡片组件
function UsersTabsCard({
  id,
  character,
  pinyin,
  definition,
  englishDefinition,
}) {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex flex-col h-full p-5 justify-between">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-1">
            {character} | {pinyin}
          </h2>
        </div>
        <div className="overflow-auto mb-3" style={{ maxHeight: '150px' }}>
          <p>{definition}</p>
          <p className="mt-2 text-gray-500">{englishDefinition}</p>
        </div>
        <hr />
        <div className="text-center mt-3">
          <Link
            to={`/${id}`} // 使用 id 作为动态路由参数
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            了解详情
          </Link>
        </div>
      </div>
    </div>
  )
}

function UsersTabs() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const items = [
    {
      id: 1,
      character: '材',
      pinyin: 'cái',
      definition: '木料；能力；棺木',
      englishDefinition: 'Material; talent; coffin',
    },
    {
      id: 2,
      character: '偏',
      pinyin: 'piān',
      definition: '歪，不在中间；不全面，不正确；愿望、预料或一般情况不相同',
      englishDefinition: 'Skewed; not centered; partial or incorrect',
    },
    {
      id: 3,
      character: '铜',
      pinyin: 'tóng',
      definition: '一种金属元素，富延展性。',
      englishDefinition: 'A metal element, malleable.',
    },
    {
      id: 4,
      character: '冻',
      pinyin: 'dòng',
      definition: '液体或含水分的东西遇冷凝结；感到寒冷或受到寒冷。',
      englishDefinition: 'Liquid or moisture that freezes; feeling cold.',
    },
    {
      id: 5,
      character: '证',
      pinyin: 'zhèng',
      definition: '用人物、事实来表明或断定；凭据，帮助断定事理的东西',
      englishDefinition: 'Proof or evidence; a means to determine the truth.',
    },
    {
      id: 6,
      character: '骑',
      pinyin: 'qí',
      definition: '跨坐在牲畜或其他东西上；骑兵，亦泛指骑马的人',
      englishDefinition: 'To ride on an animal; cavalry, or rider.',
    },
    {
      id: 7,
      character: '秧',
      pinyin: 'yāng',
      definition: '植物的幼苗；某些植物的茎',
      englishDefinition: 'Seedling of a plant; stalk of certain plants.',
    },
    {
      id: 8,
      character: '破',
      pinyin: 'pò',
      definition: '碎，不完整；分裂；超出；花费，耗费',
      englishDefinition: 'Broken, incomplete; split; exceed; spend, consume.',
    },
    {
      id: 9,
      character: '攻',
      pinyin: 'gōng',
      definition: '打击，与“守”相对；指责，驳斥；致力学习或研究',
      englishDefinition:
        'Attack, as opposed to defense; to criticize; to study or research intensely.',
    },
    {
      id: 10,
      character: '颈',
      pinyin: 'jǐng',
      definition: '头和躯干相连接的部分（亦称“脖子”）',
      englishDefinition: 'The part that connects the head to the body; neck.',
    },

    {
      id: 21,
      character: '宵',
      pinyin: 'xiāo',
      definition: '夜：通～达旦。春～',
      englishDefinition: 'Night; through the night until dawn',
    },
    {
      id: 22,
      character: '界',
      pinyin: 'jiè',
      definition:
        '边境，一个区域的边限范围指大自然中动物、植物、矿物等的最大的类别',
      englishDefinition:
        'Border, boundary; limits of a region; categories in nature (animals, plants, minerals)',
    },
    {
      id: 23,
      character: '字',
      pinyin: 'zì',
      definition: '用来记录语言的符号文字的不同形式，书法的派别',
      englishDefinition:
        'Character or symbol used to record language; forms of writing, calligraphy styles',
    },
    {
      id: 24,
      character: '架',
      pinyin: 'jià',
      definition: '用做支承的东西支承，搀扶互相殴打，争吵量词',
      englishDefinition:
        'A frame or support; to support or assist; to fight or argue; classifier for airplanes, machines',
    },
    {
      id: 25,
      character: '案',
      pinyin: 'àn',
      definition:
        '长形的桌子或架起来代替桌子用的长木板提出计划、方法和建议事件，特指涉法律问题的事件古代有短脚盛食物的木托盘',
      englishDefinition:
        'Long table or plank; to propose plans or suggestions; case, especially legal; ancient low tray for holding food',
    },
    {
      id: 26,
      character: '慈',
      pinyin: 'cí',
      definition:
        '仁爱，和善特指“慈母”，多用于对人称自己的母亲对父母的孝敬奉养',
      englishDefinition:
        'Kindness, benevolence; specifically "loving mother"; used in reference to one’s own mother',
    },
    {
      id: 27,
      character: '斧',
      pinyin: 'fǔ',
      definition: '砍东西用的工具，多用来砍木头用斧砍',
      englishDefinition: 'An axe, primarily used for chopping wood',
    },
    {
      id: 28,
      character: '贡',
      pinyin: 'gòng',
      definition:
        '献东西给上级，古代臣下或属国把物品进献给帝王封建时代给朝廷荐举人才：',
      englishDefinition:
        'To offer tribute to a superior; in ancient times, subjects or vassal states presented offerings to the emperor; also refers to recommending talents to the court',
    },
    {
      id: 29,
      character: '凳',
      pinyin: 'dèng',
      definition: '有腿没有靠背的坐具',
      englishDefinition: 'A stool with legs but no backrest',
    },
    {
      id: 30,
      character: '赏',
      pinyin: 'shǎng',
      definition:
        '指地位高的人或长辈给地位低的人或晚辈财物因爱好某种东西而观看认识到人的才能或作品的价值而给予重视：',
      englishDefinition:
        'To bestow a reward or gift; to appreciate or view something; to recognize and value talent or work',
    },
    {
      id: 31,
      character: '固',
      pinyin: 'gù',
      definition: '结实，牢靠；坚定，不变动；本，原来',
      englishDefinition:
        'Solid, firm; steadfast, unchanging; originally, inherently',
    },
    {
      id: 32,
      character: '园',
      pinyin: 'yuán',
      definition:
        '种植果蔬花木的地方；原指别墅游息之所，现指供人游玩、娱乐的公共场所',
      englishDefinition:
        'Garden or place for growing plants; originally meant a villa or retreat, now refers to public recreational areas',
    },
    {
      id: 33,
      character: '闻',
      pinyin: 'wén',
      definition: '听见；听见的事情；出名，有名望；名声',
      englishDefinition:
        'To hear; things heard; famous, well-known; reputation',
    },
    {
      id: 34,
      character: '裹',
      pinyin: 'guǒ',
      definition: '包；缠绕；夹带；夹杂',
      englishDefinition: 'To wrap; to bind or wind; to include or mix in',
    },
    {
      id: 35,
      character: '草',
      pinyin: 'cǎo',
      definition: '草斗，栎实也',
      englishDefinition: 'Grass or herbs; acorn of an oak',
    },
    {
      id: 36,
      character: '春',
      pinyin: 'chūn',
      definition: '推也；出也',
      englishDefinition: 'Spring (season); to push; to come out',
    },
    {
      id: 37,
      character: '争',
      pinyin: 'zhēng',
      definition: '引也',
      englishDefinition: 'To contend or fight for; to strive',
    },
    {
      id: 38,
      character: '事',
      pinyin: 'shì',
      definition: '职也',
      englishDefinition: 'Affair, matter, or task; duty',
    },
    {
      id: 39,
      character: '男',
      pinyin: 'nán',
      definition: '丈夫也',
      englishDefinition: 'Male; husband',
    },
    {
      id: 40,
      character: '利',
      pinyin: 'lì',
      definition: '銛也',
      englishDefinition: 'Sharp; profit or benefit',
    },
    {
      id: 41,
      character: '安',
      pinyin: 'ān',
      definition: '静也',
      englishDefinition: 'Peace, calm; to be at ease',
    },
    {
      id: 42,
      character: '宿',
      pinyin: 'sù',
      definition: '止也',
      englishDefinition: 'To stay overnight; lodging',
    },
    {
      id: 43,
      character: '得',
      pinyin: 'dé',
      definition: '行有所得也',
      englishDefinition: 'To obtain, to gain',
    },
    {
      id: 44,
      character: '黑',
      pinyin: 'hēi',
      definition: '火所熏之色也',
      englishDefinition: 'Black; color produced by burning',
    },
    {
      id: 45,
      character: '折',
      pinyin: 'zhé',
      definition: '败也',
      englishDefinition: 'To break or snap; to defeat',
    },
    {
      id: 46,
      character: '采',
      pinyin: 'cǎi',
      definition: '捋取也',
      englishDefinition: 'To pick or gather',
    },
    {
      id: 47,
      character: '浴',
      pinyin: 'yù',
      definition: '洒身也',
      englishDefinition: 'To bathe or shower',
    },
    {
      id: 48,
      character: '年',
      pinyin: 'nián',
      definition: '年成,五谷成熟',
      englishDefinition: 'Year; harvest or the maturity of crops',
    },
    {
      id: 49,
      character: '明',
      pinyin: 'míng',
      definition: '明亮,清晰明亮',
      englishDefinition: 'Bright, clear',
    },
    {
      id: 50,
      character: '休',
      pinyin: 'xiū',
      definition: '息止也',
      englishDefinition: 'To rest, to cease',
    },
    {
      id: 51,
      character: '林',
      pinyin: 'lín',
      definition: '平土有丛木曰林',
      englishDefinition: 'Forest; a place with clusters of trees',
    },
    {
      id: 52,
      character: '众',
      pinyin: 'zhòng',
      definition: '多也',
      englishDefinition: 'Many; multitude',
    },
    {
      id: 53,
      character: '灾',
      pinyin: 'zāi',
      definition: '火灾',
      englishDefinition: 'Disaster; fire calamity',
    },
    {
      id: 54,
      character: '苗',
      pinyin: 'miáo',
      definition: '艸生於田者',
      englishDefinition: 'Seedling; sprouts that grow in the field',
    },
    {
      id: 55,
      character: '伐',
      pinyin: 'fá',
      definition: '擊也',
      englishDefinition: 'To attack or strike',
    },
    {
      id: 56,
      character: '戎',
      pinyin: 'róng',
      definition: '古代兵器的总称',
      englishDefinition: 'General term for ancient weapons',
    },
    {
      id: 57,
      character: '出',
      pinyin: 'chū',
      definition: '進也',
      englishDefinition: 'To go out; to emerge',
    },
    {
      id: 58,
      character: '北',
      pinyin: 'běi',
      definition: '方位名，与“南”相对；古同“背”，违背，违反。',
      englishDefinition:
        'North; also means to betray or to turn against (in ancient usage)',
    },
    {
      id: 59,
      character: '其',
      pinyin: 'qí',
      definition: '簸箕',
      englishDefinition: 'Winnowing basket',
    },
    {
      id: 60,
      character: '我',
      pinyin: 'wǒ',
      definition: '施身自謂也',
      englishDefinition: 'I; myself',
    },
    {
      id: 61,
      character: '告',
      pinyin: 'gào',
      definition: '牛觸人，角箸橫木，所以告人也',
      englishDefinition: 'To inform; to report',
    },
    {
      id: 62,
      character: '內',
      pinyin: 'nèi',
      definition: '入也。从口，自外而入也',
      englishDefinition: 'Inside; to enter',
    },
    {
      id: 63,
      character: '旨',
      pinyin: 'zhǐ',
      definition: '美也',
      englishDefinition: 'Delicious; beautiful',
    },
    {
      id: 64,
      character: '汝',
      pinyin: 'rǔ',
      definition: '水。出弘農盧氏還歸山，東入淮',
      englishDefinition: 'You (archaic); also refers to a river',
    },
    {
      id: 65,
      character: '以',
      pinyin: 'yǐ',
      definition: '用',
      englishDefinition: 'To use; by means of',
    },
    {
      id: 66,
      character: '冊',
      pinyin: 'cè',
      definition: '符命也',
      englishDefinition: 'Book; volume; imperial edict',
    },
    {
      id: 67,
      character: '征',
      pinyin: 'zhēng',
      definition: '召也',
      englishDefinition: 'To summon; to conquer',
    },
  ]

  return (
    <div className="flex h-[100vh] overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
                  古文字展示 ✨
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {items.map((item) => (
                <UsersTabsCard
                  key={item.id}
                  id={item.id}
                  character={item.character}
                  pinyin={item.pinyin}
                  definition={item.definition}
                  englishDefinition={item.englishDefinition}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default UsersTabs
