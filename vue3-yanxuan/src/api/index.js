import req from './req'
import base from './base'

export const getCategoryList = () => req.get( base.categoryUrl);

export const getBanner=()=>req.get(base.bannerUrl);