/*
Navicat MySQL Data Transfer

Source Server         : qingsongdian
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : qingsongdian

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-29 14:04:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `productdetail`
-- ----------------------------
DROP TABLE IF EXISTS `productdetail`;
CREATE TABLE `productdetail` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `foodname` varchar(255) DEFAULT NULL,
  `classify` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL COMMENT '简介',
  `image` varchar(255) DEFAULT NULL,
  `hot` varchar(255) DEFAULT NULL COMMENT '是否热卖',
  `sale` varchar(255) DEFAULT NULL COMMENT '是否优惠',
  `like` int(255) DEFAULT NULL COMMENT '点赞个数',
  `property` varchar(255) DEFAULT NULL COMMENT '套餐属性',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of productdetail
-- ----------------------------
INSERT INTO `productdetail` VALUES ('1', '蟹黄胶囊高汤秋葵', '补汤', '39', '主要是由鲜味高汤，秋葵，肉类或是贝类，增稠剂和风干的蔬菜制成；风干的蔬菜可包含芹菜，灯笼椒和洋葱', '蟹黄胶囊高汤秋葵.jpg', 'true', 'false', '234', null);
INSERT INTO `productdetail` VALUES ('2', '青柠大虾', '开胃菜', '343', '香茅的味道是地道风味，菜品不仅外观五彩缤纷，色香味俱全，酸爽的感觉让你胃口大开！', '青柠大虾.jpg', 'true', 'false', '32432', null);
INSERT INTO `productdetail` VALUES ('3', '芝士三文鱼妙卷', '海鲜', '213', '三文鱼是世界名贵鱼类之一。鳞小刺少，肉色橙红，肉质细嫩鲜美，口感爽滑，既可直接生食，又能烹制菜肴，是深受人们喜爱的鱼类。同时由它制成的鱼肝油更是营养佳品。', '芝士三文鱼妙卷.jpg', 'true', 'true', '233', null);
INSERT INTO `productdetail` VALUES ('4', '腐乳烧排骨', '荤菜', '45', '用腐乳汁做了腐乳排骨。做法非常的简单，味道相当的不错，很下饭，红红的亮亮的颜色也很诱惑人。配米饭非常的过瘾哦。', '腐乳烧排骨.jpg', 'true', 'false', '454', null);
INSERT INTO `productdetail` VALUES ('5', '金丝石斛冬瓜', '素菜', '30', '既能清热生津，又能益气养胃，与少量调料等配伍，共奏清热解暑、益气生津之效。', '金丝石斛冬瓜.jpg', 'true', 'false', '32', null);
INSERT INTO `productdetail` VALUES ('6', '德州辣椒鸡肉球', '荤菜', '454', '鸡的肉质细嫩，滋味鲜美，适合多种烹调方法，并富有营养，有滋补养身的作用。鸡肉不但适于热炒、炖汤，而且是比较适合冷食凉拌的肉类。但切忌吃过多的鸡翅等鸡肉类食品，以免引起肥胖。', '德州辣椒鸡肉球.jpg', 'true', 'true', '312', null);
INSERT INTO `productdetail` VALUES ('7', '冰丝香菇', '素菜', '23', '香菇,又名花菇、香蕈、香信、香菌、冬菇、香菰，为侧耳科植物香蕈的子实体。它是一种生长在木材上的真菌。味道鲜美，香气沁人，营养丰富。主治食欲减退，少气乏力。', '冰丝香菇.jpg', 'true', 'true', '11', null);
INSERT INTO `productdetail` VALUES ('8', '萝卜酸', '开胃菜', '43', '·酸萝卜是一种腌制的食物。把清脆可口的红萝卜采来后，放在流水中冲洗干净，切成均匀的薄的片儿，拌上作料，放在粉红色的酸水中浸泡，经一个晚上取出，拌上喷香的油泼辣子，便是辰溪著名的酸萝卜', '萝卜酸.jpg', 'true', 'false', '56', null);
INSERT INTO `productdetail` VALUES ('9', '红枣雪梨木瓜汤', '补汤', '324', '木瓜果肉厚实细致、甜美可口、营养丰富，有“百益水果”、“水果之皇”之雅称。木瓜含有一种酵素，能消化蛋白质，有利于人对食物进行消化和吸收.', '红枣雪梨木瓜汤.jpg', 'true', 'false', '324', null);
