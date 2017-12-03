/*
Navicat MySQL Data Transfer

Source Server         : qingsongdian
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : qingsongdian

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-29 14:04:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('3', 'b', '111', '男');
INSERT INTO `users` VALUES ('4', 'bb', '1', '女');
INSERT INTO `users` VALUES ('5', 'fdfdssd', 'eeww', '女');
