import { register as utils_list } from './treeview/utils_list/register.ts'

import { register as feature_color } from './command/features/color/register.ts'
import { register as feature_time } from './command/features/time/register.ts'

export
const register_list = [
  utils_list,

  feature_color,
  feature_time,
]
