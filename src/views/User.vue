<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />
  
    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard
          :followings="followings"
        />
        <!-- UserFollowersCard -->
        <UserFollowersCard
          :followers="followers"
        />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard
          :comments="comments"
        />
        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'

const dummyData = {
  'profile': {
    'id': 1,
    'name': 'root',
    'email': 'root@example.com',
    'password': '$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe',
    'isAdmin': true,
    'image': 'https://i.imgur.com/58ImzMM.png',
    'createdAt': '2019-07-30T16:24:54.983Z',
    'updatedAt': '2019-08-01T10:33:51.095Z',
    'Comments': [
      {
        'id': 7,
        'text': 'Quidem sapiente animi iste ad sapiente quas impedit natus.',
        'UserId': 1,
        'RestaurantId': 7,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 7,
          'name': 'Melvin Flatley Sr.',
          'tel': '1-255-894-3279 x2314',
          'address': '138 Quinn Street',
          'opening_hours': '08:00',
          'description': 'quos dolore tenetur',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=43.25768589113377',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.434Z',
          'updatedAt': '2019-07-30T16:24:55.434Z',
          'CategoryId': 1
        }
      },
      {
        'id': 11,
        'text': 'Aut assumenda consequatur.',
        'UserId': 1,
        'RestaurantId': 11,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 11,
          'name': 'Haley Trantow',
          'tel': '(919) 824-7063 x83066',
          'address': '86902 Yost Parks',
          'opening_hours': '08:00',
          'description': 'Nam ipsum magnam quia.\nCulpa voluptate ducimus unde eos ipsam qui sunt.\nAb quis eum voluptates doloremque.\nCorporis rerum facere.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=45.89406888977074',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.435Z',
          'updatedAt': '2019-07-30T16:24:55.435Z',
          'CategoryId': 5
        }
      },
      {
        'id': 17,
        'text': 'Inventore illo voluptas eligendi debitis ut sit.',
        'UserId': 1,
        'RestaurantId': 17,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 17,
          'name': 'Alexandro Bahringer',
          'tel': '293-115-4784',
          'address': '75754 Ashlynn Field',
          'opening_hours': '08:00',
          'description': 'Et dolores non harum. Non autem dolorem deserunt. Est sit ut aut assumenda vel voluptas. Eligendi cumque unde autem sed velit eligendi. Est occaecati asperiores corrupti. Quidem perferendis id fuga.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=46.018008252855424',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 1
        }
      },
      {
        'id': 20,
        'text': 'Mollitia sint itaque.',
        'UserId': 1,
        'RestaurantId': 20,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 20,
          'name': 'Kathlyn Miller',
          'tel': '008.083.2181 x62854',
          'address': '0511 Syble Meadows',
          'opening_hours': '08:00',
          'description': 'Dolor facere asperiores explicabo voluptates voluptates accusantium. Adipisci qui cupiditate et. Voluptatibus odit et consequatur qui quos nisi. Quis quisquam qui reprehenderit.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=68.5893410293084',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 5
        }
      },
      {
        'id': 21,
        'text': 'Odit voluptatem et est quasi.',
        'UserId': 1,
        'RestaurantId': 21,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 21,
          'name': 'Clovis Mayert',
          'tel': '1-292-930-4113 x0577',
          'address': '3255 Streich Inlet',
          'opening_hours': '08:00',
          'description': 'Nihil occaecati consectetur explicabo sint nobis beatae numquam.\nOdit quo enim officiis est eaque et velit facilis.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 3
        }
      },
      {
        'id': 23,
        'text': 'Provident ducimus sed debitis deserunt recusandae incidunt iusto.',
        'UserId': 1,
        'RestaurantId': 23,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 23,
          'name': 'Obie Veum',
          'tel': '852.152.3521 x47973',
          'address': '543 Waters Bypass',
          'opening_hours': '08:00',
          'description': 'Ea voluptate fugiat id est voluptatem sit. Aut debitis qui impedit distinctio. Porro doloremque voluptas esse non temporibus ipsum. Illo dolore vel voluptatum vero qui ullam sed rerum eius.\n \rNecessitatibus debitis maiores veniam et neque mollitia dignissimos assumenda quisquam. In ipsa quo quod quo et nesciunt dolore id. Qui culpa labore. Qui velit praesentium vitae et et perspiciatis et.\n \rLaborum odit eum neque rerum. Dolorem consectetur placeat corporis. Amet delectus minima ipsa veniam. Non qui maxime porro exercitationem hic.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=47.513014434319146',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.437Z',
          'updatedAt': '2019-07-30T16:24:55.437Z',
          'CategoryId': 1
        }
      },
      {
        'id': 27,
        'text': 'Tenetur numquam non.',
        'UserId': 1,
        'RestaurantId': 27,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 27,
          'name': 'Penelope Mayert DDS',
          'tel': '1-775-369-6229',
          'address': '52148 Susan Pike',
          'opening_hours': '08:00',
          'description': 'non nobis quo',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.439Z',
          'updatedAt': '2019-07-30T16:24:55.439Z',
          'CategoryId': 1
        }
      },
      {
        'id': 29,
        'text': 'Vel beatae rerum sint similique rerum.',
        'UserId': 1,
        'RestaurantId': 29,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 29,
          'name': 'Alysson Kshlerin',
          'tel': '1-058-555-3466 x134',
          'address': '384 Homenick Drives',
          'opening_hours': '08:00',
          'description': 'Perspiciatis aut facere accusamus harum ipsum. Commodi quia pariatur ut qui voluptatum officiis eum velit. Veniam quia in nihil placeat quisquam veniam eveniet doloremque.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=82.75935793619603',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 5
        }
      },
      {
        'id': 30,
        'text': 'Ut est velit fugiat soluta facilis aut qui nihil dolore.',
        'UserId': 1,
        'RestaurantId': 30,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 30,
          'name': 'Lyda Bruen',
          'tel': '1-295-307-9128 x25682',
          'address': '79554 Kassulke Radial',
          'opening_hours': '08:00',
          'description': 'Et quam iste nulla ut et distinctio sunt omnis recusandae.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=25.932072460400413',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-31T04:26:33.945Z',
          'CategoryId': 1
        }
      },
      {
        'id': 34,
        'text': 'Numquam repudiandae distinctio quis id ut ad id voluptatibus.',
        'UserId': 1,
        'RestaurantId': 34,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 34,
          'name': 'Mr. Stephan Hermiston',
          'tel': '(973) 940-7729',
          'address': '9097 Maggio Fall',
          'opening_hours': '08:00',
          'description': 'cum fugiat exercitationem',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=97.2910546090258',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 2
        }
      },
      {
        'id': 35,
        'text': 'Et aut dolor dolor consequatur molestiae enim.',
        'UserId': 1,
        'RestaurantId': 35,
        'createdAt': '2019-07-30T16:24:55.451Z',
        'updatedAt': '2019-07-30T16:24:55.451Z',
        'Restaurant': {
          'id': 35,
          'name': 'Katlynn Bernier',
          'tel': '670-552-7484',
          'address': '58478 Jalyn Way',
          'opening_hours': '08:00',
          'description': 'eligendi',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=95.63772194306041',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 4
        }
      },
      {
        'id': 38,
        'text': 'Sed quod ut sed vel quo voluptatem voluptates.',
        'UserId': 1,
        'RestaurantId': 38,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 38,
          'name': 'Russel Rodriguez',
          'tel': '990.966.8912 x46650',
          'address': '386 Cummerata Path',
          'opening_hours': '08:00',
          'description': 'Quia dolores autem et. Tempore aut est rerum praesentium fugit est in aliquam. Rem laborum unde.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.02259586265372',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 4
        }
      },
      {
        'id': 44,
        'text': 'Omnis quae corporis aut.',
        'UserId': 1,
        'RestaurantId': 44,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 44,
          'name': 'Sonny Funk',
          'tel': '093-689-0372',
          'address': '908 Kassulke Landing',
          'opening_hours': '08:00',
          'description': 'Asperiores sequi doloribus. Alias corporis praesentium quas amet. Ad et delectus amet ea reiciendis. Perspiciatis aliquid sapiente doloremque. Ut hic reiciendis velit voluptates atque.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=88.97383668164223',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.442Z',
          'updatedAt': '2019-07-30T16:24:55.442Z',
          'CategoryId': 2
        }
      },
      {
        'id': 45,
        'text': 'Itaque repellendus dolores iure exercitationem officia hic quasi.',
        'UserId': 1,
        'RestaurantId': 45,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 45,
          'name': 'Luther Hickle',
          'tel': '477-667-6528 x320',
          'address': '79381 Bradtke Manor',
          'opening_hours': '08:00',
          'description': 'Esse qui rerum et occaecati quia quo molestiae. Consequuntur rem iste doloribus minus esse ea voluptas atque. Dolore distinctio tempore expedita atque unde aliquam laudantium.\n \rQuaerat est ut. Nulla dolore a error eaque voluptatem quo. Laborum quis reiciendis in ipsa dolores dolor exercitationem itaque deserunt. Rerum ut ab sequi consequatur quae nulla. Consequatur nam aut voluptate amet qui omnis. Voluptatem commodi assumenda quisquam consequatur magni quod repellat ut dolore.\n \rRem nesciunt quia adipisci debitis distinctio est. Odit voluptas autem repellendus commodi a quas voluptatum. At quia modi ut ea earum consequatur facere recusandae.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=78.10379900896436',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.442Z',
          'updatedAt': '2019-07-30T16:24:55.442Z',
          'CategoryId': 3
        }
      },
      {
        'id': 46,
        'text': 'Aut atque aut accusamus architecto laboriosam sapiente.',
        'UserId': 1,
        'RestaurantId': 46,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 46,
          'name': 'Jasper Mueller',
          'tel': '254-159-2190',
          'address': '44890 Dominique Wall',
          'opening_hours': '08:00',
          'description': 'dolorem ratione et',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=67.08831513935154',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.443Z',
          'updatedAt': '2019-07-30T16:24:55.443Z',
          'CategoryId': 2
        }
      },
      {
        'id': 49,
        'text': 'Omnis voluptatum necessitatibus consequuntur quia.',
        'UserId': 1,
        'RestaurantId': 49,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 49,
          'name': 'Russ Kertzmann',
          'tel': '087-274-1881',
          'address': '6601 Lura Lodge',
          'opening_hours': '08:00',
          'description': 'sed',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.443Z',
          'updatedAt': '2019-07-30T16:24:55.443Z',
          'CategoryId': 4
        }
      },
      {
        'id': 50,
        'text': 'Quis quo aut aperiam accusamus et et ut.',
        'UserId': 1,
        'RestaurantId': 50,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 50,
          'name': 'Mrs. Wellington Lehner',
          'tel': '792-886-2864 x53152',
          'address': '4185 Cartwright Green',
          'opening_hours': '08:00',
          'description': 'aspernatur',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.977654953966386',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.443Z',
          'updatedAt': '2019-07-30T16:24:55.443Z',
          'CategoryId': 3
        }
      },
      {
        'id': 51,
        'text': 'Quas accusamus sint blanditiis enim eveniet aliquam vel.',
        'UserId': 1,
        'RestaurantId': 1,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 1,
          'name': 'Laurence Reynolds',
          'tel': '1-657-067-3756 x9782',
          'address': '187 Kirlin Squares',
          'opening_hours': '08:00',
          'description': 'sit est mollitia',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.432Z',
          'updatedAt': '2019-07-30T17:26:43.260Z',
          'CategoryId': 3
        }
      },
      {
        'id': 52,
        'text': 'Facere voluptate adipisci ratione non deleniti.',
        'UserId': 1,
        'RestaurantId': 2,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 2,
          'name': 'Annie Dooley',
          'tel': '228-349-0567 x9394',
          'address': '25552 Brando Crossing',
          'opening_hours': '08:00',
          'description': 'cumque',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=96.7530669611723',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.433Z',
          'updatedAt': '2019-07-30T16:51:48.621Z',
          'CategoryId': 5
        }
      },
      {
        'id': 55,
        'text': 'Debitis explicabo harum.',
        'UserId': 1,
        'RestaurantId': 5,
        'createdAt': '2019-07-30T16:24:55.452Z',
        'updatedAt': '2019-07-30T16:24:55.452Z',
        'Restaurant': {
          'id': 5,
          'name': 'Niko Bahringer',
          'tel': '1-068-049-4717 x2744',
          'address': '555 Pagac Extension',
          'opening_hours': '08:00',
          'description': 'Ea expedita hic facilis qui. Quibusdam vel non at voluptatem excepturi. Voluptatem rerum quam dolorem accusamus.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=92.97546946757748',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.433Z',
          'updatedAt': '2019-07-30T16:24:55.433Z',
          'CategoryId': 5
        }
      },
      {
        'id': 72,
        'text': 'Voluptas dicta iste sed unde nesciunt sequi esse.',
        'UserId': 1,
        'RestaurantId': 22,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 22,
          'name': 'Mr. Lavonne Grimes',
          'tel': '841.933.1636',
          'address': '298 Albin Road',
          'opening_hours': '08:00',
          'description': 'Quia eum eum sapiente sint distinctio eveniet.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=64.93265026937894',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.437Z',
          'updatedAt': '2019-07-30T16:24:55.437Z',
          'CategoryId': 2
        }
      },
      {
        'id': 76,
        'text': 'Aut voluptatem quod consequatur sequi sed voluptates sit aliquam.',
        'UserId': 1,
        'RestaurantId': 26,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 26,
          'name': 'Zoe Connelly',
          'tel': '724-565-0111',
          'address': '8718 Nolan Roads',
          'opening_hours': '08:00',
          'description': 'Ipsum aspernatur quis est voluptates maiores quam autem est. Nesciunt quibusdam velit. Qui iste quibusdam molestiae et molestias et. Officia ipsam facere. Voluptatum cum itaque qui necessitatibus amet et itaque. Sed consequuntur at omnis quos cupiditate accusantium tempore fugiat ut.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=51.62937107379864',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.438Z',
          'updatedAt': '2019-07-30T16:24:55.438Z',
          'CategoryId': 1
        }
      },
      {
        'id': 81,
        'text': 'Ut totam repellat tempora.',
        'UserId': 1,
        'RestaurantId': 31,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 31,
          'name': 'Shaun Pfeffer',
          'tel': '1-497-798-0349',
          'address': '2593 Brenna Ways',
          'opening_hours': '08:00',
          'description': 'sapiente et et',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=72.44505750884267',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 5
        }
      },
      {
        'id': 82,
        'text': 'Sapiente incidunt vitae reiciendis dignissimos sit natus quod.',
        'UserId': 1,
        'RestaurantId': 32,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 32,
          'name': 'Eriberto Zboncak V',
          'tel': '(626) 794-3858 x2457',
          'address': '372 Reinger Shores',
          'opening_hours': '08:00',
          'description': 'Veritatis non ratione temporibus impedit et id esse.\nItaque aut laudantium tempore corrupti consequuntur.\nQuae dolor doloribus quae at exercitationem sed velit.\nA beatae quis est iure numquam facilis.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=48.817524543311094',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 3
        }
      },
      {
        'id': 84,
        'text': 'Cumque corrupti architecto.',
        'UserId': 1,
        'RestaurantId': 34,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 34,
          'name': 'Mr. Stephan Hermiston',
          'tel': '(973) 940-7729',
          'address': '9097 Maggio Fall',
          'opening_hours': '08:00',
          'description': 'cum fugiat exercitationem',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=97.2910546090258',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 2
        }
      },
      {
        'id': 90,
        'text': 'Et doloremque quia earum nulla ipsam est sed ipsam.',
        'UserId': 1,
        'RestaurantId': 40,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 40,
          'name': 'Robyn Schroeder',
          'tel': '406.132.4400',
          'address': '647 Yundt Mountains',
          'opening_hours': '08:00',
          'description': 'Incidunt rerum perspiciatis ut iste ipsum labore.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=15.902129223636363',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 2
        }
      },
      {
        'id': 91,
        'text': 'Similique doloremque animi consectetur maxime ex voluptates alias placeat.',
        'UserId': 1,
        'RestaurantId': 41,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 41,
          'name': 'Ayana Lehner',
          'tel': '233.819.2826 x96330',
          'address': '992 Lauretta Corners',
          'opening_hours': '08:00',
          'description': 'Molestiae et id. Nisi neque maiores. Nobis eum inventore. Est eligendi voluptas sunt non. Tempore hic ipsa impedit temporibus inventore.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=74.53200258880071',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 3
        }
      },
      {
        'id': 93,
        'text': 'Ut nemo voluptatibus.',
        'UserId': 1,
        'RestaurantId': 43,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 43,
          'name': 'Carrie Robel V',
          'tel': '455.357.0399 x356',
          'address': '33531 Mayert Fall',
          'opening_hours': '08:00',
          'description': 'Quos illum dolorem laboriosam temporibus incidunt non nihil.\nPerspiciatis iusto cumque possimus.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=41.74175407974987',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.442Z',
          'updatedAt': '2019-07-30T16:24:55.442Z',
          'CategoryId': 5
        }
      },
      {
        'id': 98,
        'text': 'Sequi sapiente et aliquid adipisci nulla reiciendis consequatur.',
        'UserId': 1,
        'RestaurantId': 48,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 48,
          'name': 'Lucie McDermott',
          'tel': '(087) 019-9323 x4728',
          'address': '218 Bennett Street',
          'opening_hours': '08:00',
          'description': 'omnis',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=47.899925023303915',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.443Z',
          'updatedAt': '2019-07-30T16:24:55.443Z',
          'CategoryId': 4
        }
      },
      {
        'id': 102,
        'text': 'Illum suscipit cupiditate earum alias quam.',
        'UserId': 1,
        'RestaurantId': 2,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 2,
          'name': 'Annie Dooley',
          'tel': '228-349-0567 x9394',
          'address': '25552 Brando Crossing',
          'opening_hours': '08:00',
          'description': 'cumque',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=96.7530669611723',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.433Z',
          'updatedAt': '2019-07-30T16:51:48.621Z',
          'CategoryId': 5
        }
      },
      {
        'id': 103,
        'text': 'Fuga tenetur incidunt fuga.',
        'UserId': 1,
        'RestaurantId': 3,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 3,
          'name': 'Obie Wintheiser',
          'tel': '098-527-0731',
          'address': '7516 Gretchen Place',
          'opening_hours': '08:00',
          'description': 'sed sed eligendi',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=88.07176343116274',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.433Z',
          'updatedAt': '2019-07-30T16:24:55.433Z',
          'CategoryId': 2
        }
      },
      {
        'id': 106,
        'text': 'Accusamus impedit consequatur debitis atque.',
        'UserId': 1,
        'RestaurantId': 6,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 6,
          'name': 'Clair Herzog',
          'tel': '868-946-9602 x92653',
          'address': '65909 Marcelo Lock',
          'opening_hours': '08:00',
          'description': 'Magni enim similique et doloribus fugit.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=67.15023188933482',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.434Z',
          'updatedAt': '2019-07-30T16:24:55.434Z',
          'CategoryId': 2
        }
      },
      {
        'id': 108,
        'text': 'Inventore libero debitis optio est.',
        'UserId': 1,
        'RestaurantId': 8,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 8,
          'name': 'Dante Daniel II',
          'tel': '(071) 592-7835',
          'address': '520 Ted Springs',
          'opening_hours': '08:00',
          'description': 'nam',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=87.18358422783099',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.434Z',
          'updatedAt': '2019-07-30T16:24:55.434Z',
          'CategoryId': 5
        }
      },
      {
        'id': 109,
        'text': 'Aperiam et quod qui iusto.',
        'UserId': 1,
        'RestaurantId': 9,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 9,
          'name': 'Susan Johnston',
          'tel': '260-837-0348 x3437',
          'address': '0802 Tillman Crossing',
          'opening_hours': '08:00',
          'description': 'Aspernatur aliquam totam pariatur ut mollitia odio quasi assumenda temporibus. Rerum odit mollitia debitis. Et voluptate iure id.\n \rEsse eius est. Rerum sit expedita quia at et. Commodi quo consequatur dolore quis dolorem neque culpa rerum. Cum rerum iusto quasi officiis delectus esse quisquam. Fuga nulla tenetur.\n \rAut impedit quasi. Consequatur quas numquam cum quas dignissimos suscipit eos enim. Consequatur accusamus amet fuga dolore sunt dolor adipisci. Inventore a ut ut quam omnis eum. Adipisci maiores id perferendis accusantium qui velit dolores sunt qui. Placeat libero voluptatem et alias.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=41.270646115002016',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.434Z',
          'updatedAt': '2019-07-30T16:24:55.434Z',
          'CategoryId': 2
        }
      },
      {
        'id': 110,
        'text': 'Eum et impedit omnis deserunt optio non.',
        'UserId': 1,
        'RestaurantId': 10,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 10,
          'name': 'Howell Towne',
          'tel': '(221) 302-7497 x511',
          'address': '0858 Koss Via',
          'opening_hours': '08:00',
          'description': 'laboriosam',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=54.054925465974634',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.434Z',
          'updatedAt': '2019-07-30T16:24:55.434Z',
          'CategoryId': 4
        }
      },
      {
        'id': 113,
        'text': 'Voluptas explicabo quia voluptatibus.',
        'UserId': 1,
        'RestaurantId': 13,
        'createdAt': '2019-07-30T16:24:55.453Z',
        'updatedAt': '2019-07-30T16:24:55.453Z',
        'Restaurant': {
          'id': 13,
          'name': 'Curt Corkery',
          'tel': '377-916-6821 x9397',
          'address': '3757 Alfonzo Corner',
          'opening_hours': '08:00',
          'description': 'enim',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=19.39164947251193',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.435Z',
          'updatedAt': '2019-07-30T16:24:55.435Z',
          'CategoryId': 2
        }
      },
      {
        'id': 118,
        'text': 'Voluptatum libero dignissimos unde nulla minus.',
        'UserId': 1,
        'RestaurantId': 18,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 18,
          'name': 'Esther Herzog',
          'tel': '497-524-7986',
          'address': '218 Cummings Station',
          'opening_hours': '08:00',
          'description': 'Quis amet sint et libero unde.\nInventore et incidunt nobis iste commodi quidem.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=99.71540496895199',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 4
        }
      },
      {
        'id': 119,
        'text': 'Est modi non eum voluptatibus et iure facere id.',
        'UserId': 1,
        'RestaurantId': 19,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 19,
          'name': 'Dustin Lynch',
          'tel': '1-382-742-2344 x941',
          'address': '102 Johnson Camp',
          'opening_hours': '08:00',
          'description': 'Veritatis quae ad id amet. Similique est suscipit. Rerum blanditiis voluptatem voluptatem a architecto voluptatem nesciunt blanditiis. Iste deleniti ut eos quia quia qui id ut molestias. Veritatis voluptas quibusdam.\n \rEt temporibus aut. Laboriosam ab et. Amet provident reprehenderit et quam. Impedit recusandae aut itaque voluptatem et rerum tempore.\n \rEt voluptate ullam reiciendis sit nostrum eveniet. Aut aut quidem aut commodi nulla ea. Qui quae soluta omnis explicabo ut aliquid. Aut soluta sapiente nihil fuga repudiandae. Quia aliquid consectetur sequi porro quam.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=19.604747512748677',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 5
        }
      },
      {
        'id': 121,
        'text': 'Placeat velit corrupti laboriosam ex.',
        'UserId': 1,
        'RestaurantId': 21,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 21,
          'name': 'Clovis Mayert',
          'tel': '1-292-930-4113 x0577',
          'address': '3255 Streich Inlet',
          'opening_hours': '08:00',
          'description': 'Nihil occaecati consectetur explicabo sint nobis beatae numquam.\nOdit quo enim officiis est eaque et velit facilis.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=31.579240610126313',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.436Z',
          'updatedAt': '2019-07-30T16:24:55.436Z',
          'CategoryId': 3
        }
      },
      {
        'id': 127,
        'text': 'Odio assumenda commodi illum.',
        'UserId': 1,
        'RestaurantId': 27,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 27,
          'name': 'Penelope Mayert DDS',
          'tel': '1-775-369-6229',
          'address': '52148 Susan Pike',
          'opening_hours': '08:00',
          'description': 'non nobis quo',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.439Z',
          'updatedAt': '2019-07-30T16:24:55.439Z',
          'CategoryId': 1
        }
      },
      {
        'id': 130,
        'text': 'Voluptas dolores soluta fugit aliquid vitae.',
        'UserId': 1,
        'RestaurantId': 30,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 30,
          'name': 'Lyda Bruen',
          'tel': '1-295-307-9128 x25682',
          'address': '79554 Kassulke Radial',
          'opening_hours': '08:00',
          'description': 'Et quam iste nulla ut et distinctio sunt omnis recusandae.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=25.932072460400413',
          'viewCounts': 1,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-31T04:26:33.945Z',
          'CategoryId': 1
        }
      },
      {
        'id': 132,
        'text': 'Optio natus dolor inventore et voluptatem consequatur necessitatibus.',
        'UserId': 1,
        'RestaurantId': 32,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 32,
          'name': 'Eriberto Zboncak V',
          'tel': '(626) 794-3858 x2457',
          'address': '372 Reinger Shores',
          'opening_hours': '08:00',
          'description': 'Veritatis non ratione temporibus impedit et id esse.\nItaque aut laudantium tempore corrupti consequuntur.\nQuae dolor doloribus quae at exercitationem sed velit.\nA beatae quis est iure numquam facilis.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=48.817524543311094',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 3
        }
      },
      {
        'id': 135,
        'text': 'Ea sunt et ad est reiciendis.',
        'UserId': 1,
        'RestaurantId': 35,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 35,
          'name': 'Katlynn Bernier',
          'tel': '670-552-7484',
          'address': '58478 Jalyn Way',
          'opening_hours': '08:00',
          'description': 'eligendi',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=95.63772194306041',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.440Z',
          'updatedAt': '2019-07-30T16:24:55.440Z',
          'CategoryId': 4
        }
      },
      {
        'id': 136,
        'text': 'Culpa est incidunt molestiae.',
        'UserId': 1,
        'RestaurantId': 36,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 36,
          'name': 'Josephine Schulist',
          'tel': '226-490-5291',
          'address': '88970 Mayer Street',
          'opening_hours': '08:00',
          'description': 'Voluptatem aliquid ut suscipit ut expedita quis et. Cum asperiores labore. Labore est at et amet iusto mollitia possimus in quibusdam.\n \rEt facere voluptas qui amet. Aut inventore voluptatem. Quia vitae omnis velit ducimus voluptas cupiditate.\n \rSoluta repudiandae nam. Vitae excepturi aspernatur ad. Voluptatem quos qui eos est provident et quis dolor expedita.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=28.52785244639493',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 2
        }
      },
      {
        'id': 139,
        'text': 'Facere consequuntur expedita et.',
        'UserId': 1,
        'RestaurantId': 39,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 39,
          'name': 'Johnpaul Keeling',
          'tel': '(237) 706-1277',
          'address': '9844 McCullough Village',
          'opening_hours': '08:00',
          'description': 'Ut id numquam numquam ut qui sed qui consequatur. Nesciunt assumenda vero architecto inventore aliquam laboriosam et accusantium dignissimos. Optio natus ea nulla voluptates odio maiores quia voluptas. Aut illo similique. Quae sed recusandae consectetur quisquam veritatis et nesciunt.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=39.32881737000879',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 2
        }
      },
      {
        'id': 141,
        'text': 'Sequi sequi iste aspernatur voluptatibus tempora corrupti iste repudiandae quaerat.',
        'UserId': 1,
        'RestaurantId': 41,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 41,
          'name': 'Ayana Lehner',
          'tel': '233.819.2826 x96330',
          'address': '992 Lauretta Corners',
          'opening_hours': '08:00',
          'description': 'Molestiae et id. Nisi neque maiores. Nobis eum inventore. Est eligendi voluptas sunt non. Tempore hic ipsa impedit temporibus inventore.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=74.53200258880071',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.441Z',
          'updatedAt': '2019-07-30T16:24:55.441Z',
          'CategoryId': 3
        }
      },
      {
        'id': 144,
        'text': 'Eveniet exercitationem in non aut commodi.',
        'UserId': 1,
        'RestaurantId': 44,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 44,
          'name': 'Sonny Funk',
          'tel': '093-689-0372',
          'address': '908 Kassulke Landing',
          'opening_hours': '08:00',
          'description': 'Asperiores sequi doloribus. Alias corporis praesentium quas amet. Ad et delectus amet ea reiciendis. Perspiciatis aliquid sapiente doloremque. Ut hic reiciendis velit voluptates atque.',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=88.97383668164223',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.442Z',
          'updatedAt': '2019-07-30T16:24:55.442Z',
          'CategoryId': 2
        }
      },
      {
        'id': 148,
        'text': 'Distinctio officia dicta.',
        'UserId': 1,
        'RestaurantId': 48,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 48,
          'name': 'Lucie McDermott',
          'tel': '(087) 019-9323 x4728',
          'address': '218 Bennett Street',
          'opening_hours': '08:00',
          'description': 'omnis',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=47.899925023303915',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.443Z',
          'updatedAt': '2019-07-30T16:24:55.443Z',
          'CategoryId': 4
        }
      },
      {
        'id': 150,
        'text': 'Expedita voluptatum laudantium tenetur impedit maxime maxime quo voluptatem.',
        'UserId': 1,
        'RestaurantId': 50,
        'createdAt': '2019-07-30T16:24:55.454Z',
        'updatedAt': '2019-07-30T16:24:55.454Z',
        'Restaurant': {
          'id': 50,
          'name': 'Mrs. Wellington Lehner',
          'tel': '792-886-2864 x53152',
          'address': '4185 Cartwright Green',
          'opening_hours': '08:00',
          'description': 'aspernatur',
          'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.977654953966386',
          'viewCounts': null,
          'createdAt': '2019-07-30T16:24:55.443Z',
          'updatedAt': '2019-07-30T16:24:55.443Z',
          'CategoryId': 3
        }
      }
    ],
    'FavoritedRestaurants': [
      {
        'id': 1,
        'name': 'Laurence Reynolds',
        'tel': '1-657-067-3756 x9782',
        'address': '187 Kirlin Squares',
        'opening_hours': '08:00',
        'description': 'sit est mollitia',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
        'viewCounts': 1,
        'createdAt': '2019-07-30T16:24:55.432Z',
        'updatedAt': '2019-07-30T17:26:43.260Z',
        'CategoryId': 3,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 1,
          'createdAt': '2019-07-30T16:25:54.586Z',
          'updatedAt': '2019-07-30T16:25:54.586Z'
        }
      },
      {
        'id': 30,
        'name': 'Lyda Bruen',
        'tel': '1-295-307-9128 x25682',
        'address': '79554 Kassulke Radial',
        'opening_hours': '08:00',
        'description': 'Et quam iste nulla ut et distinctio sunt omnis recusandae.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=25.932072460400413',
        'viewCounts': 1,
        'createdAt': '2019-07-30T16:24:55.440Z',
        'updatedAt': '2019-07-31T04:26:33.945Z',
        'CategoryId': 1,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 30,
          'createdAt': '2019-08-01T10:26:30.330Z',
          'updatedAt': '2019-08-01T10:26:30.330Z'
        }
      },
      {
        'id': 27,
        'name': 'Penelope Mayert DDS',
        'tel': '1-775-369-6229',
        'address': '52148 Susan Pike',
        'opening_hours': '08:00',
        'description': 'non nobis quo',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=77.93437663958767',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.439Z',
        'updatedAt': '2019-07-30T16:24:55.439Z',
        'CategoryId': 1,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 27,
          'createdAt': '2019-08-01T10:26:31.504Z',
          'updatedAt': '2019-08-01T10:26:31.504Z'
        }
      },
      {
        'id': 23,
        'name': 'Obie Veum',
        'tel': '852.152.3521 x47973',
        'address': '543 Waters Bypass',
        'opening_hours': '08:00',
        'description': 'Ea voluptate fugiat id est voluptatem sit. Aut debitis qui impedit distinctio. Porro doloremque voluptas esse non temporibus ipsum. Illo dolore vel voluptatum vero qui ullam sed rerum eius.\n \rNecessitatibus debitis maiores veniam et neque mollitia dignissimos assumenda quisquam. In ipsa quo quod quo et nesciunt dolore id. Qui culpa labore. Qui velit praesentium vitae et et perspiciatis et.\n \rLaborum odit eum neque rerum. Dolorem consectetur placeat corporis. Amet delectus minima ipsa veniam. Non qui maxime porro exercitationem hic.',
        'image': 'https://loremflickr.com/320/240/restaurant,food/?random=47.513014434319146',
        'viewCounts': null,
        'createdAt': '2019-07-30T16:24:55.437Z',
        'updatedAt': '2019-07-30T16:24:55.437Z',
        'CategoryId': 1,
        'Favorite': {
          'UserId': 1,
          'RestaurantId': 23,
          'createdAt': '2019-08-01T10:26:35.299Z',
          'updatedAt': '2019-08-01T10:26:35.299Z'
        }
      }
    ],
    'Followers': [
      {
        'id': 2,
        'name': 'user1',
        'email': 'user1@example.com',
        'password': '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
        'isAdmin': false,
        'image': 'https://i.imgur.com/Q14p2le.jpg',
        'createdAt': '2019-07-30T16:24:55.204Z',
        'updatedAt': '2019-08-01T10:34:15.105Z',
        'Followship': {
          'followerId': 2,
          'followingId': 1,
          'createdAt': '2019-08-01T10:27:45.616Z',
          'updatedAt': '2019-08-01T10:27:45.616Z'
        }
      }
    ],
    'Followings': [
      {
        'id': 2,
        'name': 'user1',
        'email': 'user1@example.com',
        'password': '$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y',
        'isAdmin': false,
        'image': 'https://i.imgur.com/Q14p2le.jpg',
        'createdAt': '2019-07-30T16:24:55.204Z',
        'updatedAt': '2019-08-01T10:34:15.105Z',
        'Followship': {
          'followerId': 1,
          'followingId': 2,
          'createdAt': '2019-08-01T10:26:54.947Z',
          'updatedAt': '2019-08-01T10:26:54.947Z'
        }
      },
      {
        'id': 3,
        'name': 'user2',
        'email': 'user2@example.com',
        'password': '$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2',
        'isAdmin': false,
        'image': 'https://i.imgur.com/OezkRwO.jpg',
        'createdAt': '2019-07-30T16:24:55.422Z',
        'updatedAt': '2019-08-01T10:34:36.023Z',
        'Followship': {
          'followerId': 1,
          'followingId': 3,
          'createdAt': '2019-08-01T10:26:55.618Z',
          'updatedAt': '2019-08-01T10:26:55.618Z'
        }
      }
    ]
  },
  'isFollowed': false
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      currentUser: {}
    }
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
    this.currentUser = dummyUser.currentUser
  },
  methods: {
    fetchUser(userId) {
      console.log('user id: ', userId)
      const { profile, isFollowed } = dummyData
      const { id, image, name, email, Followings, Followers, Comments, FavoritedRestaurants } = profile

      this.user = {
        ...this.user,
        id,
        image,
        name,
        email,
        followingsLength: Followings.length,
        followersLength: Followers.length,
        commentsLength: Comments.length,
        favoritedRestaurantsLength: FavoritedRestaurants.length
      }
      this.comments = Comments
      this.isFollowed = isFollowed
      this.followings = Followings
      this.followers = Followers
      this.favoritedRestaurants = FavoritedRestaurants
    }
  }
}
</script>