import { Link } from 'react-router-dom'
import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
import React, { useState } from 'react'

// 单个字符卡片组件
function UsersTabsCard({ id, character, definition }) {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex flex-col h-full p-5 justify-between">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">{character}</h2>
        </div>
        <div className="overflow-auto mb-3" style={{ maxHeight: '150px' }}>
          <p>{definition}</p>
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
    { id: 1, character: '材', definition: '木料；能力；棺木' },
    {
      id: 2,
      character: '偏',
      definition: ' 歪，不在中间；不全面，不正确；愿望、预料或一般情况不相同',
    },
    { id: 3, character: '铜', definition: '一种金属元素，富延展性。' },
    {
      id: 4,
      character: '冻',
      definition: '液体或含水分的东西遇冷凝结汤汁凝成的胶体感到寒冷或受到寒冷',
    },
    {
      id: 5,
      character: '证',
      definition: '用人物、事实来表明或断定凭据，帮助断定事理的东西',
    },
    {
      id: 6,
      character: '骑',
      definition:
        '跨坐在牲畜或其他东西上骑的马或乘坐的其他动物骑兵，亦泛指骑马的人',
    },
    {
      id: 7,
      character: '秧',
      definition: '植物的幼苗某些植物的茎栽植；畜养：',
    },
    { id: 8, character: '破', definition: '碎，不完整；分裂超出；花费，耗费' },
    {
      id: 9,
      character: '攻',
      definition: '打击，与“守”相对指责，驳斥致力学习或研究',
    },
    {
      id: 10,
      character: '颈',
      definition: '头和躯干相连接的部分（亦称“脖子”）',
    },
    {
      id: 11,
      character: '削',
      definition: '用刀斜着去掉物体的表层。打乒乓球时用球拍平而略斜地击球',
    },
    { id: 12, character: '瓢', definition: '舀水或取东西的工具形状像瓢的' },
    {
      id: 13,
      character: '放',
      definition:
        '解脱约束，得到自由带牲畜到野外去吃草驱逐到远方去；到基层去发出；借钱给别人，收取利息搁、置：这件事情不要紧',
    },
    {
      id: 14,
      character: '雌',
      definition: '母的，阴性的，与“雄”相对矿物，橙黄色，可做颜料',
    },
    {
      id: 15,
      character: '故',
      definition:
        '意外的事情原因；有心，存心老，旧，过去的，原来的死亡（指人）；所以，因此',
    },
    {
      id: 16,
      character: '管',
      definition: '吹奏的乐器圆而细长中空的东西形状像管的电子器件负责，经理',
    },
    {
      id: 17,
      character: '露',
      definition:
        '靠近地面的水蒸气，夜间遇冷凝结成的小水球在室外，无遮盖加入药料或果子汁制成的饮料或药剂滋润',
    },
    { id: 18, character: '爸', definition: '父亲。常叠用' },
    { id: 19, character: '芳', definition: '花草的香气喻美好的花卉' },
    { id: 20, character: '崖', definition: ' 高地的边，陡立的山边边际' },
    { id: 21, character: '宵', definition: '夜：通～达旦。春～' },
    {
      id: 22,
      character: '界',
      definition:
        '边境，一个区域的边限范围指大自然中动物、植物、矿物等的最大的类别',
    },
    {
      id: 23,
      character: '字',
      definition: '用来记录语言的符号文字的不同形式，书法的派别',
    },
    {
      id: 24,
      character: '架',
      definition: '用做支承的东西支承，搀扶互相殴打，争吵量词',
    },
    {
      id: 25,
      character: '案',
      definition:
        '长形的桌子或架起来代替桌子用的长木板提出计划、方法和建议事件，特指涉法律问题的事件古代有短脚盛食物的木托盘',
    },
    {
      id: 26,
      character: '慈',
      definition:
        ' 仁爱，和善特指“慈母”，多用于对人称自己的母亲对父母的孝敬奉养',
    },
    {
      id: 27,
      character: '斧',
      definition: '砍东西用的工具，多用来砍木头用斧砍',
    },
    {
      id: 28,
      character: '贡',
      definition:
        ' 献东西给上级，古代臣下或属国把物品进献给帝王封建时代给朝廷荐举人才：',
    },
    { id: 29, character: '凳', definition: '有腿没有靠背的坐具' },
    {
      id: 30,
      character: '赏',
      definition:
        '指地位高的人或长辈给地位低的人或晚辈财物因爱好某种东西而观看认识到人的才能或作品的价值而给予重视：',
    },
    { id: 31, character: '固', definition: '结实，牢靠坚定，不变动本，原来' },
    {
      id: 32,
      character: '园',
      definition:
        '种植果蔬花木的地方原指别墅游息之所，现指供人游玩、娱乐的公共场所',
    },
    {
      id: 33,
      character: '闻',
      definition: '听见；听见的事情出名，有名望；名声',
    },
    { id: 34, character: '裹', definition: '包；缠绕：夹带；夹杂' },
    { id: 35, character: '草', definition: '草斗，栎实也' },
    { id: 36, character: '春', definition: '推也；出也' },
    { id: 37, character: '争', definition: '引也' },
    { id: 38, character: '事', definition: '职也' },
    { id: 39, character: '男', definition: '丈夫也' },
    { id: 40, character: '利', definition: '銛也' },
    { id: 41, character: '安', definition: '静也' },
    { id: 42, character: '宿', definition: '止也' },
    { id: 43, character: '得', definition: '行有所得也' },
    { id: 44, character: '黑', definition: '火所熏之色也' },
    { id: 45, character: '折', definition: '败也' },
    { id: 46, character: '采', definition: '捋取也' },
    { id: 47, character: '浴', definition: '洒身也' },
    { id: 48, character: '年', definition: '年成,五谷成熟' },
    { id: 49, character: '明', definition: '明亮,清晰明亮' },
    { id: 50, character: '休', definition: '息止也' },
    { id: 51, character: '林', definition: '平土有丛木曰林' },
    { id: 52, character: '众', definition: '多也' },
    { id: 53, character: '灾', definition: '火灾' },
    { id: 54, character: '苗', definition: '艸生於田者' },
    { id: 55, character: '伐', definition: '擊也' },
    { id: 56, character: '戎', definition: '古代兵器的总称' },
    { id: 57, character: '出', definition: '進也' },
    {
      id: 58,
      character: '北',
      definition: '方位名，与“南”相对；古同“背”，违背，违反。',
    },
    { id: 59, character: '其', definition: '簸箕' },
    { id: 60, character: '我', definition: '施身自謂也' },
    { id: 61, character: '告', definition: '牛觸人，角箸橫木，所以告人也' },
    { id: 62, character: '內', definition: '入也。从口，自外而入也' },
    { id: 63, character: '旨', definition: '美也' },
    { id: 64, character: '汝', definition: '水。出弘農盧氏還歸山，東入淮' },
    { id: 65, character: '以', definition: '用' },
    { id: 66, character: '冊', definition: '符命也' },
    { id: 67, character: '征', definition: '召也' },
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
                  definition={item.definition}
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
