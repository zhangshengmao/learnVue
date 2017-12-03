/*
Navicat MySQL Data Transfer

Source Server         : qingsongdian
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : qingsongdian

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-29 14:04:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(255) DEFAULT NULL,
  `via` varchar(255) DEFAULT NULL,
  `client` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `star` int(10) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`client`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', 'A.jpg', '我是小狗狗', '很好吃，非常好吃', '5', '2017-11-01');
INSERT INTO `comment` VALUES ('2', 'B.jpg', '我是小猫咪', '一点都不好吃，差评', '1', '2017-11-02');
INSERT INTO `comment` VALUES ('3', 'C.jpg', '我是小鸭子', '一般般，要求不是很高', '3', '2017-11-11');
INSERT INTO `comment` VALUES ('4', 'E.jpg', '我是小青蛙', '真的很好吃哟，而且干净卫生，下次再来。真的很好吃哟，而且干净卫生，下次再来真的很好吃哟，而且干净卫生，下次再来真的很好吃哟，而且干净卫生，下次再来', '5', '2016-02-03');
INSERT INTO `comment` VALUES (null, 'A.jpg', '用户646385555', '真的很好吃', '5', '2017-11-3');
INSERT INTO `comment` VALUES (null, 'A.jpg', '用户103090507', '攻入个人而', '5', '2017-11-3');
